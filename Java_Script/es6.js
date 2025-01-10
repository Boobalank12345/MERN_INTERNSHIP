// ES6 =>ECMA Script Standard 6
// 1.variable declarations -> refer variable.js

// 2.Scope 
// var- Global Scope
// let- Local/Block Scope
// // const- Global Scope
// var a=10
// const con=3.14
// console.log(a)
// console.log(con)
// {
//     let a=20
//     let b=30
//     console.log(a);
//     console.log(b);
// }
// console.log(a)
// console.log(con)

// // 3.Class and Objects
// class ClassEG
//     {
//         constructor()
//         {
//             this.a=10
//         }
//     a=10
// }
// obj=new ClassEG()
// console.log(obj.funInClass())
// console.log(obj.a);

// // 4.Arrow Function
//  funInClass=() =>{
//   console.log(a);
// }

// // 5.Tenary Operator
// a=10
// console.log((a%2==0)?"Even":"Odd");

// // 6.Spead Operator
// a=[10,20,30,40]
// b=[50,60,70]
// c=[...b,...a]
// console.log(c);

// // 7.Rest Operator[...]
// function restOpEg(a,b,...arg)
// {
//     console.log(a)
//     console.log(b)
//     console.log(arg)
// }
// restOpEg(10,20,30,40,50,...b)

// 8.Destructing Operator
// var array=[10,20,30]
// var[a,b,c,d]=array
// console.log(a,b,c,d);

//  9.Hoisting
// 1.Variable Hoisting
// console.log(a);
// var a=10;
// console.log(b);
// let b=10;
// console.log(c);
// const c=10;

// // 2.Function Hoisting
// console.log(fun())
// {
//     return 10
// }
// console.log(fun1())
// function fun1()
// {
//     return 10
