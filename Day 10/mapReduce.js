// const coding = ["JavaScript","Java","Python","Swift","Ruby"]

// const value = coding.forEach(element => {
//     // console.log(element);
//     return element
// });

// console.log(value);



let number = [1,2,3,4,5,6,7,8,9,10]

const num1 = number.filter( (num) => num > 4 )

// console.log(num1);


const num2 = number.filter( (num) => {
    return num > 4
} )

// console.log(num2);



let newNum = []
number.forEach( (num) => {
    if(num > 4){
        newNum.push(num)
    }
})

// console.log(newNum);




// Filter Method.

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'Science')
// console.log(userBooks);

userBooks = books.filter( (bk) => bk.publish >= 2004)
// console.log(userBooks);


userBooks = books.filter( (bk) => bk.publish >= 2004 && bk.genre === 'Science')
// console.log(userBooks);



// Map Method.

number = [1,2,3,4,5,6,7,8,9,10]

let num = number.map( (num) => num+10 )
// console.log(num);




newNum = number.map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 50 )

// console.log(newNum);




// Reduce Method.


number = [1,2,3,4,5]

// num = number.reduce(function (acc, currValue) {
//     console.log(`acc: ${acc} and Current Value: ${currValue}.`);
//     return acc + currValue
// },0)

// console.log(num);


let numRed = number.reduce( (acc, currValue) => acc + currValue , 0 )

// console.log(numRed);




const shoppingCart = [
    {
        course : "Java Script Course",
        price : 2999
    },
    {
        course : "Java Course",
        price : 3999
    },
    {
        course : "Python Course",
        price : 1999
    },
    {
        course : "Swift Course",
        price : 4999
    },
    {
        course : "Ruby Course",
        price : 1599
    },
]

const shoppingPrice = shoppingCart.reduce( (accu, item) => accu + item.price,0)


console.log(shoppingPrice);
