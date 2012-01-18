echo "Compiling..."

find src/ -name '*.coffee' \
| xargs java -cp .:lib/js.jar org.mozilla.javascript.tools.shell.Main lib/compile.js

exit $?