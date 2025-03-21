console.log("Arrow Function ");
// Arrow Function is introduce in ES6 and 2015.


const user={
    name: "Akash Singh",
    age: 22,

    message: function(){
        console.log(`${this.name}, Welcome to Website.`);
        console.log(this);
        
    }
}

// user.message()

// user.name="Abhi Singh"
// user.message()



// function chai(){
//     let name="Akash Singh";
//     console.log(this.name);
// }

// chai()



const chai=()=>{
    let name="Akash Singh";
    console.log(this);
}

// chai()


// () => {}
// () => ()


// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(5,6));


const addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(10,20));


