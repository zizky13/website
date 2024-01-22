// spread operator = ... allows an iterable such as an
//                   array or string to be expanded into
//                   seperate elements (unpack the elements)

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
let username = "Hokkaido"
let letters = [...username].join("-");
let fruits = ["apple","orange","banana"];
 //shallow copy of fruits
let vegetables = ["carrots","celery","potato"]
let foods = [...fruits, ...vegetables,"eggs","milk"];


console.log(fruits);
console.log(foods);
console.log(letters);
console.log(maximum);
console.log(minimum);
