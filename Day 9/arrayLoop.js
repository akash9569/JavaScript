// Array Loop


// for of Loop
// for in Loop
// for each Loop


const arr=[1,2,3,4,5,6,7]
for (const num of arr) {
    // console.log(num);
}

const fruit=["Mango","Banana","Apple","Guava","Grapes"]

for(const f of fruit){
    // console.log(f);
}




// Maps


const map=new Map()
map.set('Name',"Akash Singh")
map.set('age',22)
map.set('Language',"JavaScript")

// console.log(map);



for (const key of map) {
    // console.log(key);
}

for(const [key] of map){
    // console.log(key);
}


for(const [key,value] of map){
    // console.log(key,":-",value);
}




// for in Loop

const obj={
    js:"JavaScript",
    rb:"Ruby",
    cpp:"C++",
    swift:"Swift"
}

// Find key in Object.
for (const key in obj) {
    // console.log(key);
}


// Find Value in Object.
for(const value in obj){
    // console.log(obj[value]);
}


// Find key and value pair in Object.
for(const key in obj){
    // console.log(`${key} shortcut is for ${obj[key]}.`);
    
}


// Find the key in Array.
const fruit1=["Mango","Banana","Apple","Guava","Grapes"]
for(const key in fruit1){
    // console.log(key);
}




// Find the value in Array.

for(const value in fruit1){
    // console.log(fruit1[value]);
}



// const map1=new Map()
// map1.set('Name',"Akash Singh")
// map1.set('age',22)
// map1.set('Language',"JavaScript")

// for(const key in map1){
//     console.log(key);
// }



// For Each Loop.

const coding=["JavaScript","Java","Python","CPP","Ruby","Swift"]


// Multiple Way to Print the Array.

coding.forEach(function (value) {
    // console.log(value);
})

coding.forEach((item) => {
    // console.log(item);
})
coding.forEach(element => {
    // console.log(element);
});


function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)


const myCoding=[
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
    {
        languageName:"Ruby",
        languageFileName:"rb"
    }
]

myCoding.forEach(item => {
    // console.log(item.languageName);
})


