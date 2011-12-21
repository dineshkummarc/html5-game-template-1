HTML 5 Game Template
===
This template is for HTML5 games in written CoffeeScript. It is designed to compile the CoffeeScript files in `src` folder into a single, minified `.js` file.

Dependencies
--
* **Java 1.5+** - Rhino is required to run the CoffeeScript compiler as well as Google's Closure Compiler.
This template ships with the Rhino runtime in the `lib` directory, however it requires Java 1.5+ to run.

* **Unix-like Environment** - The `build.sh` file will probably not work on Windows unless you run it through Cygwin.

File Structure
---
* `bin/` - This folder is not under version control, but it is created when `build.sh` is run. This is the destination for the final `game.js` and `game.min.js` files.

* `lib/` - This folder contains third party tools necessary for the CoffeeScript compilation and Google Closure compilation (for minifying).

* `src/` - This folder should contain all of your `*.coffee` source files.

* `build.sh` - This build script will recursively aggregate all `*.coffee` files in `src/` into one file for CoffeeScript to compile. There is no guarantee of order, except `main.coffee` is always loaded last, so be sure to design your game to start from the code in that file.

* `index.html` - This HTML file will execute the compiled `game.js` file.

About
---
This template was written by (and mostly for) Matt Campbell. http://code.mattcampbell.net

Technologies/Libraries used:

* [CoffeeScript](jashkenas.github.com/coffee-script/)
* [Google Closure](http://code.google.com/closure/)
* [Mozilla Rhino](http://www.mozilla.org/rhino/)

Why didn't you just use [XYZ] instead?
--
Because this is fun for me.
