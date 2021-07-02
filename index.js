const calc = require("./module/operations");


console.log("a) 1+1 = "+calc.sum(1, 1));
console.log("b) -123 + 123123 = "+calc.sum(-123, 123123));
console.log("c) 8 * 0 = "+calc.multi(8, 0));
console.log("d) 1239123 * 12313 = "+calc.multi(1239123, 12313));
console.log("e) 123 / -12 = "+calc.div(123, -12));
console.log("f) 313123 / 0 = "+calc.div(313123, 0));


// a) 1 + 1

// b) -123 + 123123

// c) 8 * 0

// d) 1239123 * 12313

// e) 123 / -12

// f) 313123 / 0