"use strict";

// // var a = 1;
// // console.log(a)
// var a = "Mr.xue";
// // window.onload = function () {
// //     console.log(a)
// // }
// // {
// //     var a = "薛"
// //
// // }
// // console.log(a)
// {
//     let a = "薛"
// }
// //let/const会创建一个块级作用域，这里外部的console.log(x)拿不到前面2个块级作用域声明的let；
// console.log(a)
// for (var i=0; i<10;i++) {
//     console.log("循环体中：" +i)
// }
// console.log("循环体外：" +i)
for (var _i = 0; _i < 10; _i++) {
    console.log("循环体中：" + _i);
}
console.log("循环体外：" + i);
