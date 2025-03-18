// Singleton

// const user=new Object()


const user={}

user.id=2304
user.name="Akash Singh"
user.age=22

// console.log(user);


const user1={
    email: "ak@gmail.com",
    fullname:{
        firstname: "Akash",
        Lastname: "Singh"
    }
}

// console.log(user1.fullname);


const obj1={
    firstname: "Akash",
    lastname: "Singh"
}

const obj2={
    fullname: "Akash Singh",
    age: 22
    
}

// console.log({obj1,obj2});


// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);


const obj4={...obj1,...obj2}
console.log(obj4);


console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('name'));


