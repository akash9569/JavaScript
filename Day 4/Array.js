// Array in JavaScript.

const arr=[1,2,3,4,5,6,7,"Akash"]
// console.log(arr);
// console.log(arr[7]);

const fruit=["Apple","Banana","Grapes","Guava","Mango"]
// console.log(fruit);

const arr2=new Array(1,2,3,4,5,6)
// console.log(arr2);



// Array Methods.

arr2.push(7)
arr2.push(8)
// console.log(arr2);
arr2.pop()
// console.log(arr2);

// Unshift add the element starting of the array.
arr2.unshift(9)
// console.log(arr2);

// Shift remove the element in starting point.
arr2.shift()
// console.log(arr2);

// Includes is find the element in array using number.
// console.log(arr2.includes(7));

// Indexof is return the value of storing these index.
// console.log(arr2.indexOf(5));

// Join is convert the type of array in String.
// console.log(arr2.join());


// Slice and Splice.
const arr3=[1,2,3,4,5,6,7,8]
// console.log("A",arr3);

const myn1=arr3.slice(1,4)
// console.log("B",arr3);
// console.log(myn1);

const myn2=arr3.splice(1,4)
// console.log("C",arr3);
// console.log(myn2);


const name=["Akash","Abhi","Suraj","Shivam"]
const name2=["Shubham","Anurag","Happy","Arun"]

// name.push(name2)
// console.log(name);
// console.log(name[4]);
// console.log(name[4][2]);

const newName=name.concat(name2)
// console.log(newName);

const newName2=[...name, ...name2]
// console.log(newName2);



const newArray=[1,2,3,4,[5,6,7],8,[9,10,[11,12,13]]]
const newArray2=newArray.flat(Infinity)
// console.log(newArray);
// console.log(newArray2);

console.log(Array.isArray("Akash Singh"));
console.log(Array.from("Akash Singh"));

console.log(Array.from({name: "Akash Singh"}));


let score1=100
let score2=200
let score3=300
let score4=400

console.log(Array.of(score1,score2,score3,score4));
















