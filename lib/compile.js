importPackage(java.io);
eval(readFile('lib/coffeescript.js'));

new File('./bin').mkdir();

var input = new BufferedReader(new InputStreamReader(java.lang.System['in']));
var line = '', buffer = '';
while ((line = input.readLine()) !== null) {
	buffer += String(line) + "\n";
}
input.close();

var output = new PrintStream(new FileOutputStream('bin/game.js'));
output.print(CoffeeScript.compile(buffer));

output.close();
