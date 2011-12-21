importPackage(java.io);
eval(readFile('lib/coffeescript.js'));

new File('./bin').mkdir();

var output = new PrintStream(new FileOutputStream('bin/game.js'));
output.print(
	CoffeeScript.compile(
		readFile(arguments[0])
	)
);

output.close();
