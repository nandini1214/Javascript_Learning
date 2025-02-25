let A = 123  
var b = "ABC" //can't used because it can be changed everywhere 
const C = 2.3  // can't be changed
D = "1234"

console.table([A,b,C,D])
A = "Jidfs" 
b = 45
// C = "svhdu" const can't be changed 
D = 53.5
console.table([A,b,C,D])