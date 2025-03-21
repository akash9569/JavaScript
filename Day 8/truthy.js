const email="ak@gmail.com"

if(email){
    console.log("Got user Email.");
}
else{
    console.log("Don't have user Email.");
}




// Falssy Value

/* 
false
0
-0
BigInt
0n
""
null
undefined
NaN
*/



// Truthy Value

/* 
"0"
'false'
" "
[] -> Array
{} -> Object
function(){}
*/


// if(email.length === 0){
//     console.log("Array is Empty.");
// }





const emptyObj={}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty.");
}




// Nullish Coalescing Operator (??): null undefined

let val;
// val=5 ?? 10
// val = null ?? 20
// val = undefined ?? 20
// val = null ?? 10 ?? 20
// val = null ?? undefined ?? 20
console.log(val);





// Ternary Operator

// condition ? true : false.

const price=200
price <= 100 ? console.log("Less Than 100") : console.log("Greater Than 100");

