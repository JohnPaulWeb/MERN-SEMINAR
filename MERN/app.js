const math = require("./math");
const greet = require("./greet");


console.log(math.add(2, 3));
console.log(math.sub(5, 2));

module.exports = function greet(name) {
    console.log("Hello", name);
}

greet("John");