// function promiseEg(flag){
//     return new Promise(function(resolve,reject){
// if (flag===1){
//     resolve("This is a Promise Resolve Example")
// }
// else if(flag===0){
//     reject("This is a Promise Reject Example")
// }
//     })
// }

import { time } from "console"








// Promise - Location Finder Example
// Pass 2 things - Melboune,2000

locationFinder("Melboune",2000)
locationFinder=(location,time)=>{
    return new Promise((locFound,locNotFound)=>{
        if(isLocationValid(location,time)){
            locFound([location,"Found in",2000,"millsecs"])

        }
    })
}   
