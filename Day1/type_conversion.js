let a = 5
let b = "5a"
a = String(a) // type conversion
b = Number(b)
console.log(typeof a)
console.log(typeof b)
console.log(b) // NaN -> Not a Number


let c = false
c = Number(c)
console.log(c)

let name = "jaya"
name = Boolean(name)
console.log(name);