const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const [A, B] = input;

let result = "";

if (A > B) {
  result = ">";
} else if (A < B) {
  result = "<";
} else {
  result = "==";
}

console.log(result);
