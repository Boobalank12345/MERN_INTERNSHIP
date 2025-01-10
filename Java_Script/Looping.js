/*
two kinds of loops: 
normal:
  for while do...while
advanced:
    for...in for...of forEach 
*/

// for loop

// var a=[10,20,30]
// var b={"count":70,"abs":1}
// for(let i in b)
// {
//     console.log(i,b.i)
// }

// // for loop

// var a=[10,20,30]
// var b={"count":70,"abs":1}
// for(let i in a)
// {
//     console.log(i,a)
// }

// set=new Set(["hello",1,2,"SECE","44",2,"hello","SECE",5])
// console.log(set);
// for(let i in set)
//     {
//     console.log("loop is running");
//     console.log(i);
// }
// for(const key in set)
// {
//     if(Object.prototype.hasOwnProperty.call(set,key))
//         console.log(Element)
// }

//for of loop
for(let [i,j] in Object.entries(b)){
    console.log(i,j)
} 