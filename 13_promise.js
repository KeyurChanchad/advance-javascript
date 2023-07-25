let getData = false;

let prom = new Promise((resolve, reject)=>{
    if (getData) {
        resolve("Data get sucessfully.")
    }
    else{
        reject("Data not get yet.")
    }
});

prom.then(result => {
    console.log(result);   
}).catch(error => console.log(error));
