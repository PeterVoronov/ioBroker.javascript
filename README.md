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
  * Here you can find description of [blockly](docs/en/blockly.md). 
  * Hier kann man die Beschreibung von [Blockly](docs/de/blockly.md) finden. 
  * Описание по [blockly](docs/ru/blockly.md) можно найти [здесь](docs/ru/blockly.md).

## Forbidden directories for Script Filesystem Mirroring
The Script Filesystem Mirroring will store all Sourсe Files of the Scripts in your Filesystem to allow you to edit the Files in your favourite Script editor beside the Web-Editor. All changes are synced in both directions.

When enabling the Script Filesystem mirroring please make sure to create a **dedicated new directory** and **do not** use an existing directory with other content. Please also make sure that no other script or process changes files in the provided directory to prevent access issues.
Any location needs to be writable by the "iobroker" user!

Since v5.5.0 of the JavaScript adapter the following locations (relative to the ioBroker Base directory, usually `/opt/iobroker`) are not allowed to be used:
* The ioBroker base directory itself and any path above!
* `./iobroker-data` itself, custom subdirectory (choose a name that do not overlap with any adapter!)
* `./iobroker-data/backup-objects` or anything below
* `./iobroker-data/files` or anything below
* `./iobroker-data/backitup` or anything below
* `./backups` or anything below
* `./node_modules` or anything below
* `./log` or anything below

## How to build (only for developers)
Just run `npm i` in the root and in the src folders.

And then call `npm run build`.

## Todo
- Goto current line in debugger
- heating profile (future releases)
- ...

## Changelog
<!--
	Placeholder for the next version (at the beginning of the line):
	### **WORK IN PROGRESS**
-->

### __WORK IN PROGRESS__
* (Apollon77) make sure values of new or changed alias objects are initialized properly
* (winnyschuster) Enhance scheduler logic and astro events offered by wizard
* (Apollon77) Respect expected value changes when determining if a value is changed
* (Apollon77) Make state properties c(omment) and user available to scripts too

### 5.5.4 (2022-04-03)
* (bluefox) Tried to solve problem with the font

### 5.5.3 (2022-03-25)
* (bluefox) Fixed getObjectAsync function if object does not exist

### 5.5.2 (2022-03-23)
* (bluefox) Added new rules action block: sum two states (or minus)

### 5.5.0 (2022-03-22)
* (Apollon77) Prevent Mirror directory being set to central ioBroker directories because can produce various issues
* (Apollon77) Fixed existsState and existsObject
* (bluefox) Fixed translations

### 5.4.5 (2022-03-20)
* (Apollon77) Fix existsState and existsObject

## License
The MIT License (MIT)

Copyright (c) 2014-2022 bluefox <dogafox@gmail.com>,

Copyright (c) 2014      hobbyquaker
