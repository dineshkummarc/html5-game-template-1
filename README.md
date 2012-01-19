HTML 5 Game Template
===
This template is for HTML5 games in written CoffeeScript. It is designed to compile the CoffeeScript files in `src` folder into a single, minified `.js` file.

Dependencies
--
* **Java 1.5+** - Java is required to run Google's Closure Compiler.

* **NodeJS** - `node` needs to be available in your `PATH`

* **CoffeeScript** - `coffee` needs to be available in your `PATH`

* **Unix-like Environment** - The `compile.sh` and `build.sh` files will probably not work on Windows unless you run it through Cygwin.

File Structure
---
* `bin/` - This folder is not under version control, but it is created when `compile.sh` or `build.sh` is run. This is the destination for the final `game.js` and `game.min.js` files.

* `lib/` - This folder contains third party tools necessary for the RequireJS dependency management and Google Closure compilation (for minifying).

* `src/` - This folder should contain all of your `*.coffee` source files.

* `compile.sh` - This compile script will recursively compile all `*.coffee` files in `src/` and bundle them with RequireJS. The final bundled file is `bin/game.js`

* `build.sh` - This build script will execute `compile.sh` and run Google's Closure Compiler to minify `bin/game.js` to `bin/game.min.js`

* `index.html` - This HTML file will execute the compiled `game.js` file.

* `live-compile.js` - This small NodeJS app will provide a local server that automatically compiles/bundles your CoffeeScript code every time you refresh!

About
---
This template was written by (and mostly for) Matt Campbell. http://code.mattcampbell.net

Technologies/Libraries used:

* [CoffeeScript](jashkenas.github.com/coffee-script/)
* [Google Closure](http://code.google.com/closure/) - JavaScript optimizer and minifier
* [r.js](https://github.com/jrburke/r.js) - [RequireJS](http://requirejs.org/) optimizer
* [almond](https://github.com/jrburke/almond) - r.js wrapper which removes RequireJS dependency from the final files