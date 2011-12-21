java -cp .:lib/js.jar org.mozilla.javascript.tools.shell.Main lib/compile.js game.coffee

if [ $? -ne 0 ] ; then
	echo "CoffeeScript compilation failed"
	exit
fi

java -jar lib/compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js game.js --js_output_file game.min.js
