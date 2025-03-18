// Singleton 


// Object Literals


const key=Symbol("key1");
const user={
    name:"Akash",
    "Full Name": "Akash Singh",
    [key]: "Key2",
    age: 22,
    location: "Mirzapur",
    email: "ak@gmail.com",
    isLoggedIn: false
}

// console.log(user.name);
// console.log(user.email);
// console.log(user["Full Name"]);
// console.log(typeof(user.key));
// console.log(user[key]);



user.email= "akash@gmail.com";
// Object.freeze(user)

user.email= "aman@gmail.com";
// console.log(user);



user.greeting=function(){
    console.log("Hello User");
}
console.log(user.greeting());

user.greetingone=function(){
    console.log(`Hello User, ${this.name}`);
}
console.log(user.greetingone());



