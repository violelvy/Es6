'use strict';

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
// let {foo,bar} = {foo:'Mr.Xue',bar:'薛'};
// console.log(foo+bar) 
// let foo;
// ({foo} = {foo :'Xue'});
// console.log(foo)
// const [a,b,c,d,e,f] = 'Mr.Xue';
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)


// 扩展运算符和rest运算符
// 01 扩展运算符
// 不确定参数个数
// function xue(...arg) {
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
//     console.log(arg[4]);
//     console.log(arg[5]);
// }
// xue(1,2,3)
// let arr1 =['www','Mr','Xue'];
// // let arr2 = arr1;
// let arr2 = [...arr1];
// console.log(arr2);
// arr2.push('xcy');
// console.log(arr2);
// console.log(arr1);
// // 没有开辟新的内存空间，arr1的内存空间映射到arr2
// 02 rest运算符
// rest ...
// function xue (first,...arg) {
//     // for(let i=0;i<ary.length;i++) {
//     //     console.log(arg[i]);
//     // }
//     for (let val of arg) {ß
//         console.log(val)
//     }
//     // console.log(arg.length);
// }
// xue(0,1,2,3,4,5,6,7);

// 字符串模板
// let xue = '薛春云';
// // let say = '嘿大佬。又是元气满满的一天呢' + xue +'也要加油呀';
// let say = `嘿大佬。又是元气满满的一天呢 ${xue} 也要加油呀`;
// document.write(say);
// // document.write(say.indexOf(xue)>0);
// document.write(say.includes(xue)); //查找
// // html标签也可以嵌套其中！！！attention  是`（连接符）不是'（单引号）!
// document.write(say.startsWith(xue));//查找开头
// document.write(say.endWith(xue));//查找结尾
document.write('xue|'.repeat(30)); //字符串的复制
