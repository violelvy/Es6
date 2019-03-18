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
// for (let i=0; i<10;i++) {
//     console.log("循环体中：" +i)
// }
// console.log("循环体外：" +i)
// const a = "Mr.xue";
// let [a,b,c] = [1,2,3];
// console.log(a)
// console.log(b)
// console.log(c)
// let [foo="true"] = [];
// console.log(foo)
// let [foo=false] = [];
// console.log(foo)
// let [a,b = '薛'] = ['Mr.Xue',null]
// console.log(a+b);
// undefined with null 的区别
// undefined 没有值 
// null 有值 取的是null
let {foo,bar} = {foo:'Mr.Xue',bar:'薛'};
console.log(foo+bar) 