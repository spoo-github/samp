// const EventEmitter = require("node:events");
// const emitter = new EventEmitter();
// emitter.on("order-pizza",(size,topping) => {
//     console.log(`Order received! Baking a ${size} pizza with ${topping}`);
// });

// emitter.on("order-pizza", (size) => {
//     if(size === "large"){
//         console.log("Serving complimentary drink");
//     }
// })

// console.log("Do work before event occurs in the system");
// emitter.emit("order-pizza","large","mushrooms");

const fs = require("node:fs");
console.log("First");
const fileContents = fs.readFileSync("./file.txt","utf-8");
console.log(fileContents);
console.log("Second");
fs.readFile("./file.txt","utf-8",(error,data) =>{       //asynchronous callback function which will kept track and then remaining are executed
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
})
console.log("third");

fs.writeFileSync("./greet.txt","Hello World!");
fs.writeFile("./greet.txt","Hello Everyone",{ flag:"a"}, (err) => {
    if(err){
        console.log(err);
    } else{
        console.log("File written");
    }
});