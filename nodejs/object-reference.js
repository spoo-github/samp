const obj1 ={
    name: " Bruce wayen",
};

let obj2 = obj1;   // when modifying obj2 , we are also modifying obj1 when used only const keyword
obj2 = {
    name: "Clark kent",
}
console.log(obj1);