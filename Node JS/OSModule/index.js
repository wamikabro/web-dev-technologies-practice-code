import OS, { availableParallelism } from "node:os";

// os.machine() gives you the architecture of the underlying machine, which may vary depending on the hardware.
// os.arch() reflects the architecture for which the currently running Node.js binary is compiled.
console.log(`My Node JS program is ${OS.arch()} bits.`);
console.log("My System is: " + OS.machine() + " bits.");

console.log(OS.cpus()); // information about each core
console.log(OS.availableParallelism()); // number of cores available

// returns free memory available in bytes. I am converitng to GBs
// But available memory of the drive you're running this program in
console.log("Available Memory: " + OS.freemem() / 1024 / 1024 / 1024);

console.log(OS.homedir());

console.log(OS.hostname());

console.log(OS.networkInterfaces());

console.log(OS.platform()); // the machine this coee is working on

console.log(OS.release()); // operating system release code eg. 10.0.19045 means Windows 10

console.log(OS.uptime() / 60 / 60); // uptime in seconds. I am converting it to hours
