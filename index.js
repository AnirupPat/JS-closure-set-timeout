// // basic eg. of closure

// function fun() {
//   var i = 1;
//   setTimeout(() => {
//     console.log(i);
//   }, 3000);
// }
// console.log("Hello world!");

// fun();

// // var with closure.. use let to get the exoected output

// function fun2() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// fun2();

// // using IIFE to make closure to work

// function fun2() {
//   for (var i = 1; i <= 5; i++) {
//     (function (x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     })(i);
//   }
// }

// fun2();
