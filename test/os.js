const os = require("os");

console.log("________os info________");
console.log(os.arch()); // same process.arch
console.log(os.platform()); // same process.platform
console.log(os.type()); // os type
console.log(os.uptime()); // os run time
console.log(os.hostname()); // computer name
console.log(os.release()); // os version

console.log("________path________");
console.log(os.homedir()); // home dir path
console.log(os.tmpdir()); // temporary file storage path

console.log("________cpu info________");
console.log(os.cpus()); // computer cpu core infomation
console.log(os.cpus().length); // number of core

console.log("________memory info________");
console.log(os.freemem()); // available memory
console.log(os.totalmem()); // total memory capacity
