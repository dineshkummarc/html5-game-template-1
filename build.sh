echo "Compiling..."

find src/ -name '*.coffee' \
| xargs java -cp .:lib/js.jar org.mozilla.javascript.tools.shell.Main lib/compile.js

if [ $? -ne 0 ] ; then
	echo "CoffeeScript compilation failed"
	exit
fi

exit


echo "Minifying..."
java -jar lib/compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js bin/game.js --js_output_file bin/game.min.js

echo "'use strict';" | cat - bin/game.js | tee bin/game.js > /dev/null
echo -n "'use strict';" | cat - bin/game.min.js | tee bin/game.min.js > /dev/null