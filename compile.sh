echo "Compiling..."

find src/ -name '*.coffee' | xargs coffee -c

if [ $? -ne 0 ] ; then
	echo "CoffeeScript compilation failed"
	exit
fi

echo
echo "Combining ..."
node lib/r.js -o optimize=none name=../lib/almond include=main out=bin/game.js baseUrl=src wrap=true

exit $?