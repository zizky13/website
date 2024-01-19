// type conversion = change the datatype of a value to another
//                  (strings, numbers, booleans)

let x = ``;
let y = ``;
let z = ``;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);

//converting string to boolean always true
//0 also considered as true
//but if empty literal or not defined var, its false then
console.log(z, typeof z);