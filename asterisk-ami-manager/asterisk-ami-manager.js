var amanager = require('asterisk-manager');

function filterEvent(events, data) {
    if (events.length === 0 || (events.length && events.indexOf(data.event) >= 0)) {
        return true;
    }
    else {
        return false;
    }
}

function getAllowedEvents(events) {
    var evt = events.trim().split(',');
    evt = evt.filter(function (element, index, array) {
        if (element)
            return true;
        else
            return false;
    });
    evt = evt.map(function (element) {
        return element.trim();
    });
    return evt;
}

function attachEvents(context, events, callback) {
    events = events.split(' ');
    events.forEach(function (event) {
        context.on(event, callback);
    });
}

module.exports = function (RED) {
    function Asterisk(config) {

        RED.nodes.createNode(this, config);
        var node = this;

        var username = this.credentials.username;
        var password = this.credentials.password;
        var events = getAllowedEvents(config.events);

        var ami = new amanager(config.port, config.ip, username, password, true);
        ami.keepConnected();

        attachEvents(ami, 'connect', function () {
            node.status({ fill: "green", shape: "dot", text: "connected" });
        });

        attachEvents(ami, 'error close end', function () {
            node.status({ fill: "red", shape: "ring", text: "disconnected" });
        });

        attachEvents(ami, 'managerevent', function (data) {
            if (filterEvent(events, data))
                node.send({ payload: data });
        });

        node.on('input', function (msg) {
            ami.action(msg.payload, function(err, res){

            });
        });

    }
    RED.nodes.registerType("Asterisk-AMI", Asterisk, {
        credentials: {
            username: { type: "text" },
            password: { type: "password" }
        }
    });
}