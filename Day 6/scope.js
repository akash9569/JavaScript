let a=10
const b=20
var c=30

// console.log(a);
// console.log(b);
// console.log(c);

let p=200
if(true){
    let p=10
    const q=20
    var r=30
    // console.log("Inner let: ",p);
    
}

// console.log(p);
// console.log(q);
// console.log(r);




function one(){
    const username="Akash Singh"

    function two(){
        const name="Abhi Singh"
        console.log(username);
    }
    // console.log(name);
    two()
}
one()



// Interesting Discussion 

console.log(addOne(5));

function addOne(num){
    return num + 1
}


addTwo(10)

const addTwo=function(num){
    return num+2
}