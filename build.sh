sh compile.sh

if [ $? -ne 0 ] ; then
	exit
fi

echo "Minifying..."
java -jar lib/compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js bin/game.js --js_output_file bin/game.min.js