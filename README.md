# Docs

Communicate from Node-Red to an Asterisk server via AMI as a simple node. 

## Install

```
$ npm install node-red-asterisk-ami-manager
```

## Usage
Simple drag component "Asterisk AMI" from node's group "input" to flow. Then set up main options:
Name: component name
ip: host server
port: port server
username: username for authentication
password: username's password for authentication
events: events separated by a comma which will be filtered or stay field empty for forwarding all events.
## Contributors

* [Mathias Schäffler](https://github.com/m-schaeffler)
* [Alexey Sviridov](https://github.com/rimdus)

## License

MIT License
-----------

Copyright (C) 2022 by

[Mathias Schäffler](https://github.com/m-schaeffler)

Based on a work Copyright (C) 2012 - 2017 by 

* [Alexey Sviridov](https://github.com/rimdus)
* Philipp Dunkel
* and others.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
