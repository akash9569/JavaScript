// Primitive Datatypes
// 7 Types of Primitive Datatype.
/* 
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt
*/

const Name="Akash Singh"
const rollNo=2304
const score=90.9
const isLoggedIn=false

const temp=null
let Email=undefined

const id=Symbol('2304')
const anotherId=Symbol('2304')
console.log(id===anotherId);

const big=439085490839023n


/* 
Type	    typeof return value	           Object wrapper
Null	        "object"	                    N/A
Undefined	   "undefined"	                    N/A
Boolean	        "boolean"	                  Boolean
Number	        "number"	                   Number
BigInt	        "bigint"	                   BigInt
String	        "string"	                   String
Symbol	        "symbol"	                   Symbol
*/



// Reference Datatypes(Non Primitive Datatypes)

/* 
1. Array 
2. Objects
3. Functions
*/

const fruit=["Apple","Banana","Mango","Grapes"]

let obj={
    name:"Akash Singh",
    age:22
}

const func=function(){
    console.log("Hello Everyone.");
}


console.log(typeof fruit);


/* 
    Type	                    typeof return value
    Array	                         "object"
    Object	                         "object"
    Function	                    "function"
*/
// JavaScript is a Dynamically typed Langauge.
