echo "Compiling..."

find src/ -name '*.coffee' \
| grep -Ev '^src/main.coffee$' \
| xargs cat \
| cat - src/main.coffee \
| java -cp .:lib/js.jar org.mozilla.javascript.tools.shell.Main lib/compile.js

if [ $? -ne 0 ] ; then
	echo "CoffeeScript compilation failed"
	exit
fi

echo "Minifying..."

java -jar lib/compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js bin/game.js --js_output_file bin/game.min.js
