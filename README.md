![Logo](admin-config/javascript.png)
# Javascript Script Engine

![Number of Installations](http://iobroker.live/badges/javascript-installed.svg)
![Number of Installations](http://iobroker.live/badges/javascript-stable.svg)
[![NPM version](http://img.shields.io/npm/v/iobroker.javascript.svg)](https://www.npmjs.com/package/iobroker.javascript)

![Test and Release](https://github.com/ioBroker/ioBroker.javascript/workflows/Test%20and%20Release/badge.svg)
[![Translation status](https://weblate.iobroker.net/widgets/adapters/-/javascript/svg-badge.svg)](https://weblate.iobroker.net/engage/adapters/?utm_source=widget)
[![Downloads](https://img.shields.io/npm/dm/iobroker.javascript.svg)](https://www.npmjs.com/package/iobroker.javascript)
**This adapter uses Sentry libraries to automatically report exceptions and code errors to the developers.** For more details and for information how to disable the error reporting see [Sentry-Plugin Documentation](https://github.com/ioBroker/plugin-sentry#plugin-sentry)! Sentry reporting is used starting with js-controller 3.0.

Executes Javascript, Typescript Scripts.

## Documentation
* [Function documentation](docs/en/javascript.md)

* [Benutzung](docs/de/usage.md)

* Blockly
  * Here you can find the description of [blockly](docs/en/blockly.md). 
  * Hier kann man die Beschreibung von [Blockly](docs/de/blockly.md) finden. 
  * Описание по [blockly](docs/ru/blockly.md) можно найти [здесь](docs/ru/blockly.md).

## Forbidden directories for Script Filesystem Mirroring
The Script Filesystem Mirroring will store all Source Files of the Scripts in your Filesystem to allow you to edit the Files in your favourite Script editor beside the Web-Editor. All changes are synced in both directions.

When enabling the Script Filesystem mirroring, please make sure to create a **dedicated new directory** and **do not** use an existing directory with other content. Please also make sure that no other script or process changes files in the provided directory to prevent access issues.
Any location needs to be writable by the "iobroker" user!

Since v5.5.0 of the JavaScript adapter the following locations (relative to the ioBroker Base directory, usually `/opt/iobroker`) are not allowed to be used:
* The ioBroker base directory itself and any path above!
* `./iobroker-data` itself, custom subdirectory (choose a name that do not overlap with any adapter!)
* `./iobroker-data/backup-objects` or the anything below
* `./iobroker-data/files` or the anything below
* `./iobroker-data/backitup` or the anything below
* `./backups` or the anything below
* `./node_modules` or the anything below
* `./log` or the anything below

## Changelog
<!--
	### **WORK IN PROGRESS**
-->
### 8.0.2 (2024-04-08)

* (klein0r) Forced downgrade of socket-client (object change issues)

### 8.0.1 (2024-04-08)

* (klein0r) Fixed some missing translations (uk)
* (klein0r) Raised supported ecmaVersion from es2021 to es2022 (node18)

### 8.0.0 (2024-04-05)

NodeJS >= 18.x and js-controller >= 5 is required

* (klein0r) Breaking change: Removed support for binary states (deprecated since v6.2.0)
* (klein0r) Breaking change: Protected filesystem (iobroker-data/files) to prevent direct file writes
* (klein0r) Breaking change: request property has been removed of the sandbox (require the module if still needed)
* (klein0r) Added blockly block for global variables (e.g. script name)
* (klein0r) Added missing functions to protectFS
* (klein0r) Fixed httpPost (missing data)
* (klein0r) Fixed hasAttribute blockly block
* (klein0r) Fixed parenthesis insertion in blockly for multi and/or
* (PeterVoronov) Added setStateChanged / setStateChangedAsync

### 7.11.1 (2024-03-28)

* (klein0r) Added exec result blockly block
* (klein0r) Protect iobroker-data/files to avoid direct writes with node:fs
* (klein0r) Escape single quotes in blockly obj attributes

### 7.11.0 (2024-03-26)

* (klein0r) Added blockly block for read and write file
* (klein0r) Allow to select other object types than state in some blocks
* (klein0r) Improved translations
* (klein0r) Removed 'type' from dropdown (is always 'state')
* (klein0r) Use highlight in search (instead of select)
* (klein0r) Added option for httpGet to receive arraybuffer (download files)

## License
The MIT License (MIT)

Copyright (c) 2014-2024 bluefox <dogafox@gmail.com>,

Copyright (c) 2014      hobbyquaker

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
