const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "w" }
); // flag: "a" to append, w to overwrite, r to read
console.log("done with this task");
console.log("starting the next one");

const task = readFileSync("./content/result-sync.txt", "utf8");
console.log(task);
