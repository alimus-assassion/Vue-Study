/* 1.使用common.js的模块化规范 */
const {add,mul} = require('./mathUtils.js');
console.log(add(1,2));
console.log(mul(2,4));

/* 2.使用ES6的模块化规范 */
// import name,age info from "./info.js";
// console.log(name + "-" + age);

import * as info from "./info.js";
console.log(info.name + "-" + info.age)