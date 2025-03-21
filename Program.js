// 1. Write a JavaScript program to reverse String.

let str="Hello World";
let reverseStr = str.split("").reverse().join("");
console.log(reverseStr);


// 2. Write a JavaScript program to check if a Number is Prime or not.

let prime=13;
let isPrime=true;
if(prime==1){
    isPrime=false;
}
else{
    for(let i=2;i<prime;i++){
        if(prime%i==0){
            isPrime=false;
            break;
        }
    }
}

console.log(isPrime);



// 3. Write a JavaScript program to find the factorial of a Number.

let num=6;
let fact=1;
for(let i=1;i<=num;i++){
    fact=fact*i;
}
console.log(fact);

// 4. Write a JavaScript program to check if a String is a Palindrome.

let string="madam";
string=string.toLowerCase("").replace('a-z','')
let ak=string === string.split("").reverse().join("");

console.log(ak);


// 5. Write a JavaScript program to Find the Largest Number os an Array.

let arr=[23,43,24,12,45,65]
let largest=Math.max(...arr)
console.log(largest);


// 6. Write a JavaScript Program to Sum of an Array.

let arr1=[1,2,3,4,5,6];
let sum=0;
for(let i=0;i<arr1.length;i++){
    sum+=arr1[i];
}
console.log(sum);


// 7. Write a JavaScript Program to Convert Celsius to Fahrenheit.

let celsius=89;
let Fahrenheit=(9/5)*celsius+32;
console.log(Fahrenheit);


// 8. Write a JavaScript program to Remove Duplicates from an Array.

let arr2=[1,2,3,4,5,4,3,3,4,2];
let uSet=new Set(arr2);
console.log(uSet);

// 9. Write a JavaScript program to Find Intersection of Two Arrays.

let arr3=[1,2,3,4,5,6,7]
let arr4=[3,2,5,6,8,9]

let result=arr3.filter(val=>arr4.includes(val))
console.log(result);