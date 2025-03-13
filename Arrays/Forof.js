// const a = "greetings"
// for (const val of a) {
//     console.log(val)
// }
// const map1 = new Map();

// map1.set("a", 1);
// map1.set("b", 2);
// map1.set("c", 3);

// console.log(map1);
// const obj = {
// name : "Nandini",
// age : 23,
// Username : "_nandini412_"
// }
// for (const [key,value] of obj) {
//     console.log(key,value);
    
// }
const myObject = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby"
}
for (const key in myObject) {
    console.log( myObject[key]);
    
}