console.log("Looping Statement.");


// Loop or Iterator

// For Loop

for (let i = 0; i <=10; i++) {
    // console.log(i);
}


// Star Pattern.
/* 
*
**
***
****
*/
let n=5;
for(let i=0;i<=n;i++){
    let str="*";
    // console.log(str.repeat(i));
}



// Print the Whole Table 

for (let i = 1; i <= 10; i++){
    // console.log("Outer Loop "+i);
    for (let j = 1; j <= 10; j++){
        // console.log(i+"*"+j+"="+i*j);
    }
}





let fruit=["Mango","Banana","Apple","Guava","Papaya"]
// console.log("Array Length: "+fruit.length);

for (let i = 0; i < fruit.length; i++) {
    const element = fruit[i];
    // console.log(element);
}



// Keyword 

// break 
// continue

for (let i = 0; i <= 10; i++) {
    if(i==5){
        // console.log("Number 5 is detected.");
        break
    }
    // console.log(i);
}



for(let i=1;i<=10;i++){
    if(i==5){
        console.log("Number 5 is Detected.");
        continue
    }
    console.log(i);
}