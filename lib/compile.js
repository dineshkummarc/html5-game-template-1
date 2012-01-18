importPackage(java.io);
eval(readFile('lib/coffeescript.js'));

Array.prototype.forEach.apply(arguments, [function (file) {
	var input, line, buffer, output;

	input = new BufferedReader(new InputStreamReader(new FileInputStream(file)));
	line = '', buffer = '';
	while ((line = input.readLine()) !== null) {
		buffer += String(line) + "\n";
	}
	input.close();

	output = new PrintStream(new FileOutputStream(file.replace(/\.coffee$/, '.js')));
	output.print(CoffeeScript.compile(buffer));

	output.close();
}]);
