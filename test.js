// test.js
// (c) tearflake, 2024
// MIT License

"use strict";

var Sexpr = require ("./src/s-expr.js");
var output = Sexpr.parse ('(a b c)');
console.log (JSON.stringify (output, null, 4));


