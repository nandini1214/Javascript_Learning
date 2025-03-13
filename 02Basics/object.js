let sym = Symbol("Key")
let obj  = {
    username : "Nandini412",
    sym  : "key1",
    [sym]: "Key",
    email : "nandinidewra29@gmail.com",
    isloggedIn : true,
    location : "Jaipur",
    lastloginDay : ["Mon","tue"]
}
console.log(obj.sym);
console.log(obj["sym"]);
console.log(obj[sym]);
console.log(typeof obj[sym]);
console.log(typeof obj.sym);
console.log(typeof obj["sym"]);

