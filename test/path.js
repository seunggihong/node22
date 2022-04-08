const path = require("path");

const string = "__filename";

console.log(path.sep);
console.log(path.delimiter);
console.log("--------------------");
console.log(path.dirname(string));
console.log(path.extname(string));
console.log(path.basename(string));
console.log(path.basename(string, path.extname(string)));
console.log("--------------------");
console.log(path.parse(string));
console.log(
  path.format({
    dir: "c:\\users\\zerocho",
    name: "path",
    ext: ".js",
  })
);
console.log(path.normalize("c://users\\\\zerocho\\path.js"));
console.log(path.isAbsolute("c:\\"));
