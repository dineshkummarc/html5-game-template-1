sh compile.sh

if [ $? -ne 0 ] ; then
	echo "CoffeeScript compilation failed"
	exit
fi

echo
echo "Combining ..."
js lib/r.js -o optimize=none name=../lib/almond include=main out=bin/game.js baseUrl=src wrap=true

if [ $? -ne 0 ] ; then
	echo "RequireJS combination failed"
	exit
fi

echo "Minifying..."
java -jar lib/compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js bin/game.js --js_output_file bin/game.min.js