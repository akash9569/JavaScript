

function name(){
    console.log("Akash Singh");
}
// name()


function sum(a,b){
    console.log("Adding Two Number: ",a+b);
}
// sum(10,20)


function multi(a,b){
    let result=a*b
    return result
}
// const result=multi(5,5)
// console.log("Result is ",result);


function multi1(a,b,c){
    return a*b*c
}
// const result1=multi1(5,5,5)
// console.log("Result is ",result1);



function fullname(username){
    return `My name is ${username}.`
}
console.log(fullname("Akash Singh"));


function calculateCartPrice(...num){
    return num
}

console.log(calculateCartPrice(200,3000,500,400));


function calculateCartPrice1(val1,val2,...num){
    return num
}

console.log(calculateCartPrice1(200,3000,500,400));




const user={
    username: "Akash Singh",
    age: 22,
    price: 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username:"Akash",
    age: 22,
    price: 500
})


const arr=[200,500,100,400]

function returnValue(array){
    return array[2]
}
console.log(returnValue(arr));