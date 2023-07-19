
// Asynchronous Programming
let a = 20;
let b = 0;
console.log("start execution...")


let waitingData = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(20);
    }, 2000)
    
})

waitingData.then((data)=>{

    console.log(a+data);
})



// Handling asynchronous data in NodeJS