importPackage(java.io);
eval(readFile('lib/coffeescript.js'));


var output = new PrintStream(new FileOutputStream('game.js'));
output.print(
	CoffeeScript.compile(
		readFile(arguments[0])
	)
);

output.close();
