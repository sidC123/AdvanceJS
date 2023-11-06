// 💥💥💥💥 Topic 1- Var, let, Const, Scope and Mini Hoisiting. 💥💥💥💥

const empId = 12345;
let empEmail = "demo@empEmail.com";
var empPass = "123";
// empCity = "Mumbai";

// empId = 223; // Cannot re-assign the const

empEmail = "updated@email.com";
empPass = "99999";
// empCity = "Pune";

// console.table([empId, empEmail, empPass, empCity]);


// SCOPE ---------------
if (true) {
    var a = "123";
    let b = "abc";
    const c = "xyz"
}

// console.log(a);
// console.log(b);
// console.log(c);

// 'VAR' is global scope. We should avoid using VAR.
// 'LET' is block scope. Its value can be modified within the scope, but not outside it.
// 'CONST' is block scope. Must be decalred when initialized. Its value cant be changed once declared.

function One() {
    const user = "Siddhesh";

    function Two() {
        const Institute = "Trycatch";
        // console.log(user);
    }

    // console.log(Institute);

    Two();
}
One();

// -------------- HOISTING & Callstack -------------- 🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟

// something();
// console.log(x);

var x = 10; //Explain temporal dead zone with let

function something() {
    // console.log("Hello something");
}


// Global Execution context ❓
// consoling this keyword in node env and browser ❓
// Functional Execution context ❓
// Memory creation phase and Execution phase ❓

let val1 = 10;
let val2 = 5;
function sum(num1, num2) {
    let total = num1 + num2;
    return total;
}
let sumOne = sum(val1, val2);

// Process:
// Phase1: Global execution phase

// phase2: Memory creation phase
// - val1 will be allocated as undefined
// - val2 will be allocated as undefined
// - sum function will be allocated its defination
// - sumOne will also be allocated as undefined   

// phase3: Execution phase
// - val1 is assigned 10
// - val2 is assigned 5
// - Now sumOne will create its own execution context
// -- Again separate memory creation phase and execution phase will be invoked for the function
// -- total variable will be assigned as undefined
// -- Now in Execution phase num1 = 10 & num2 = 5
// -- then total will be computed and the final value will be assigned to total that is 15
// -- Finally this execution context wil be removed.
// - Also the main execution contet will also be deleted.

// Event loop
// Vist: https://excalidraw.com/#json=5D5LDAyrgPswnW1W6zuhK,nH-NTrz3Ugq8NMySUdKhVg  🌟🌟🌟🌟🌟


// ❌❌❌------------------------------Topic-1-End-----------------------------------❌❌❌

// 💥💥💥💥Topic 2- Rest amd Spread operator 💥💥💥💥

// ...args // syntax of rest and spread operator.

function SumOne(a, b) {
    return a + b;
}

let myArr = [5, 4, 2];

// console.log(SumOne(2,5));
// console.log(SumOne(2,5,3));
// console.log(SumOne(myArr));

// console.log(SumOne(...myArr)); //⭕⭕⭕ This is a spread operator
// It spread the individual values from the array.

// What if we want to sum all the elements of given array ❓❓❓ 

function SumTwo(...args) {
    // console.log(args);
    let sum = 0;
    for (let index = 0; index < args.length; index++) {
        sum += args[index];
    }
    return sum;
}

let myArrTwo = [1, 5, 3, 6];

// console.log(SumTwo(...myArrTwo)); //⭕⭕⭕ This is a rest operator

// What if we want to get the product of first two and sum of all the elements of given array ❓❓❓ 
let myArrayThree = [5, 2, 4, 8, 12, 16];

function SumThree(a, b, ...args) {
    console.log(args);
    let product = a * b;

    let sum = 0;
    for (let index = 0; index < args.length; index++) {
        sum += args[index];
    }
    return [product, sum];
}
// console.log(SumThree(...myArrayThree));

// ❌❌❌------------------------------Topic-2-End-----------------------------------❌❌❌


// 💥💥💥💥Topic 3- Object and Object Literals, this, arrow functions 💥💥💥💥

let userName = "demo";
let userAge = 12;

// let user = { userName, userAge }
// console.log(user);

// let user = { userKaNaam: userName, userkiAge: userAge }
// console.log(user);

let user = {
    username: "Siddhesh",
    age: "27",
    profession: "Teacher",
    greet: function () {
        console.log(`${this.username}, you're welcome on our website.`);
    }
}

user.education = "Engineer";
user["date of birth"] = "28/08/2000";

// console.log(user);
// console.log(user["date of birth"]);

// delete user.age;
// user.greet();


let user2 = {
    username: "Bahadoor",
    age: "45",
    printThis: function () {
        console.log(this);
    }
}
// user2.printThis();

// console.log(this); // Consoling on browser? 🌟🌟🌟


// USING THIS KEYWORD INSIDE A FUNCTION 🌟🌟🌟
function insideThis() {
    let website = "google";
    console.log(this);
    console.log(this.website);
}
// insideThis();


// USING THIS KEYWORD INSIDE REGULAR and ARROW FUNCTION 🌟🌟🌟
let car = {
    model: "Buggati Veyron",
    engine: "v12",
    myfun: function () {
        console.log(this.model);
    },
    myfunArrow: () => {
        console.log(this.model);
    },
    myfunctions: {
        model: "newmodel",
        mynewfun: function () {
            console.log(this.model);
        },
    },
}
// car.myfun();
// car.myfunArrow();
// car.myfunctions.mynewfun();


//ARROW function?? and Implicit return in fat ARROW function 🌟🌟🌟🌟

// let fun1 = (num1, num2) => {
//     return num1 + num2;
// }

// let fun1 = (num1, num2) => num1 + num2;
// console.log(fun1(5, 4));

// let fun1 = (num1, num2) => (num1 + num2);
// console.log(fun1(5, 4));

// ❌❌❌------------------------------Topic-3-End-----------------------------------❌❌❌


// 💥💥💥💥 Topic 4- Destructuring of array & Object, Intro of API JSON, Optional chaining 💥💥💥💥

let lecture = {
    topic: "Object destructing",
    topicInstructor: "Siddhesh",
    price: "5000",
    time: "8am - 10am"
}
// const { topicInstructor } = lecture;
// console.log(topicInstructor);

// const { topicInstructor: teacher } = lecture;
// console.log(teacher);

// HOW THIS HELPS IN REACT COMPONENT? 🌟🌟🌟🌟
// Understanding API response in JSON: randomuser.me + formatter 🌟🌟🌟🌟🌟


let carData = {
    model: "Subaru",
    engine: {
        type: "V8",
        ignition: {
            tdsi: true,
            cdi: true,
            mpfi: false,
        },
        cc: "1000",
        price: {
            value: 5000,
        }
    },
    capacity: "4",
}
// console.log(carData?.engine?.price?.value ?? 3000); //Optional chaining 🌟🌟🌟🌟


const student = function (name = "unnamed", attendance = 0) {
    return `Greetings ${name}, your project attendance is: ${attendance}`
}
// console.log(student());
// console.log(student("Shivani", 17));




// ❌❌❌------------------------------Topic-4-End-----------------------------------❌❌❌


// 💥💥💥💥 Topic 5- foreach, Filter, Map, reduce, Find, findIndex, Callback functions 💥💥💥💥

// forEach is a method to iterate over arrays, that expects a callback function. ⭕⭕⭕

// const subjects = ["javascript", "c++", "nodeJs", "HTML", "CSS"];

// subjects.forEach(function (sub) {
//     console.log(sub);
// })

// subjects.forEach((sub) => {
//     console.log(sub);
// })

// function print(item) {
//     console.log(item);
// }
// subjects.forEach(print);

// subjects.forEach((sub, index, array) => {
//     console.log(sub, index, array);
// })

// let products = [
//     {
//         productName: "stretchable collared",
//         productType: "Tshirt",
//         color: "Blue",
//         size: "M",
//     },
//     {
//         productName: "Checkqured premium",
//         productType: "Tshirt",
//         color: "red",
//         size: "S",
//     },
//     {
//         productName: "plain denim",
//         productType: "Jeans",
//         color: "blue",
//         size: "XL",
//     }
// ]
// use forEach on above object


// Now forEach does any given operation on the items but does not return anything. How?
// const subjects = ["javascript", "c++", "nodeJs", "HTML", "CSS"];

// const allSubjects = subjects.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(allSubjects);



// filter() returns the elements of the array ⭕⭕⭕

// const jsStudents = ["Siddhesh", "Sagar", "Samim", "Dhawal", "Prerna", "Rahul"];

// const allStudents = jsStudents.filter((std) => {
//     return std;
// })
// console.log(allStudents);

// const marks = [12, 35, 88, 56, 99, 13, 28, 61, 55, 75, 30];
// using filter() print an array of marks greater than 35.
// use forEach and try doing the same.


const books = [
    {
        "title": "To Kill a Mockingbird",
        "genre": "Fiction",
        "price": 120,
        "launchYear": 1960,
        "numPages": 281
    },
    {
        "title": "1984",
        "genre": "Science Fiction",
        "price": 100,
        "launchYear": 1949,
        "numPages": 328
    },
    {
        "title": "Pride and Prejudice",
        "genre": "Romance",
        "price": 80,
        "launchYear": 1813,
        "numPages": 279
    },
    {
        "title": "The Great Gatsby",
        "genre": "Fiction",
        "price": 110,
        "launchYear": 1925,
        "numPages": 180
    },
    {
        "title": "Moby-Dick",
        "genre": "Adventure",
        "price": 140,
        "launchYear": 1851,
        "numPages": 625
    },
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "genre": "Fantasy",
        "price": 90,
        "launchYear": 1997,
        "numPages": 309
    },
    {
        "title": "The Catcher in the Rye",
        "genre": "Fiction",
        "price": 130,
        "launchYear": 2005,
        "numPages": 277
    },
    {
        "title": "The Hobbit",
        "genre": "Fantasy",
        "price": 110,
        "launchYear": 1937,
        "numPages": 310
    },
    {
        "title": "The Hunger Games",
        "genre": "Science Fiction",
        "price": 100,
        "launchYear": 2008,
        "numPages": 374
    },
    {
        "title": "The Lord of the Rings",
        "genre": "Fantasy",
        "price": 230,
        "launchYear": 1954,
        "numPages": 1178
    },
    {
        "title": "The Da Vinci Code",
        "genre": "Mystery",
        "price": 90,
        "launchYear": 2003,
        "numPages": 454
    },
    {
        "title": "Brave New World",
        "genre": "Science Fiction",
        "price": 120,
        "launchYear": 1932,
        "numPages": 288
    },
    {
        "title": "The Road",
        "genre": "Dystopian",
        "price": 150,
        "launchYear": 2006,
        "numPages": 287
    },
    {
        "title": "The Shining",
        "genre": "Horror",
        "price": 80,
        "launchYear": 1977,
        "numPages": 447
    },
    {
        "title": "War and Peace",
        "genre": "Historical Fiction",
        "price": 180,
        "launchYear": 1869,
        "numPages": 1392
    },
    {
        "title": "The Alchemist",
        "genre": "Fiction",
        "price": 100,
        "launchYear": 1988,
        "numPages": 197
    },
    {
        "title": "The Old Man and the Sea",
        "genre": "Adventure",
        "price": 70,
        "launchYear": 1952,
        "numPages": 127
    },
    {
        "title": "Dune",
        "genre": "Science Fiction",
        "price": 140,
        "launchYear": 1965,
        "numPages": 412
    },
    {
        "title": "The Odyssey",
        "genre": "Epic Poetry",
        "price": 90,
        "launchYear": 1984,
        "numPages": 475
    },
    {
        "title": "The Chronicles of Narnia",
        "genre": "Fantasy",
        "price": 190,
        "launchYear": 1950,
        "numPages": 746
    }
]
Tasks://
// **Iterate through the list of books and print the titles and their corresponding launch years.

//Create a function that calculates and prints the total cost of purchasing all the books in the list.
{
    let totalPrice = 0;
    books.forEach((item) => {
        totalPrice += item.price;
    })
    // console.log(totalPrice)
}

// Using forEach, display the titles of books that belong to the "Science Fiction" genre.
books.forEach((book) => {
    if (book.genre === "Science Fiction") {
        // console.log(book.title);
    }
})

// Write a function that calculates and prints the average number of pages for all the books in the list.
{
    let totalPageNumber = 0;
    let avgPageNum = 0;
    books.forEach((book) => {
        totalPageNumber += book.numPages;
        avgPageNum = totalPageNumber / books.length;
    })
    // console.log(`Totals pages are ${totalPageNumber} and average pages are ${avgPageNum}`);
}

// Use forEach to find and display the titles of books published after the year 2000.
books.forEach((book) => {
    // { book.launchYear > 2000 && console.log(book.title); }
})


// Using filter:

// Create a new array containing only books that have a price lower than $100. Display the titles and their prices.
{
    // const cheapBooks = books.filter((book) => {
    //     return book.price < 100;
    // })
    // console.log(cheapBooks);
}

// Filter the list to find books with more than 400 pages and display their titles and the number of pages.
{
    const longBooks = books.filter((book) => {
        return book.numPages > 400
    }).forEach((book) => {
        // console.log(`The book '${book.title}' has ${book.numPages} pages.`);
    })
}

// Create a new array containing books published in the 20th century (between 1900 and 1999). Display their titles and launch years.
{
    const booksInTwentythCentury = books.filter((book) => {
        return book.launchYear > 1900 && book.launchYear < 1999;
    }).forEach((book) => {
        // console.log(`The book '${book.title}' was launched in year ${book.launchYear}`);
    })
}

// Filter the books to find only those with the genre "Fantasy." Display the titles and prices of these fantasy books.

// Create a new array with books that have titles containing the word "the." Display the titles and genres of these books.



// forEach() iterates over array and perform action on elements but does not return an array
// filter() returns and array but gives the original elements from the array based on some condition
/* The above code is a comment in JavaScript. It is explaining that the `map()` function in JavaScript
performs operations on elements and returns them in an array. */
// Now map() does perform the operations on elements but also returns them in an array

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let numberPlusTen = number.map((num) => {
    return num + 10;
})
// console.log(numberPlusTen);


// reduce() method takes initial value provides it to accumulator and then continues the operation but, finally returns a single value.

let numbers = [1, 2, 3, 4];

const finalNum = numbers.reduce((accumulator, currentValue) => {
    // console.log(`Accumulator: ${accumulator} and CurrentValue: ${currentValue}`);
    return accumulator + currentValue;
}, 0)
// console.log(finalNum);


let cartItems = [
    {
        "itemId": 1,
        "itemName": "Product A",
        "priceInRs": 2000,
        "quantity": 2
    },
    {
        "itemId": 2,
        "itemName": "Product B",
        "priceInRs": 3000,
        "quantity": 1
    },
    {
        "itemId": 3,
        "itemName": "Product C",
        "priceInRs": 1500,
        "quantity": 3
    },
    {
        "itemId": 4,
        "itemName": "Product D",
        "priceInRs": 4000,
        "quantity": 1
    },
    {
        "itemId": 5,
        "itemName": "Product E",
        "priceInRs": 2500,
        "quantity": 2
    }
]

let grandTotal = cartItems.reduce((accumulator, item) => {
    return accumulator + item.priceInRs
}, 0)
// console.log(grandTotal);


//Find and FindIndex ⭕⭕⭕

// Find gives the element that matches first with the condition from the array
let marks = [12, 35, 88, 56, 99, 13, 28, 61, 55, 75, 30];

const findVal = marks.find((ele) => ele > 35)
// console.log(findVal);

// FindIndex returns index of the element that matches first with the condition from the array
const findIndexOfVal = marks.findIndex((ele) => ele > 35)
// console.log(findIndexOfVal);

// ❌❌❌------------------------------Topic-5-End-----------------------------------❌❌❌



// 💥💥💥💥 Topic 6- Xml http request,fetch,Async-await,Promise,try-catch 💥💥💥💥

// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.

// const requestUrl = 'https://reqres.in/api/users?page=2'
// const xhr = new XMLHttpRequest();
// console.log(xhr.readyState); //0
// xhr.open('GET', requestUrl)
// console.log(xhr.readyState); //1
// xhr.onreadystatechange = function () {
//     console.log(xhr.readyState); // 2   3   4
//     if (xhr.readyState === 4) {
//         console.log(this.responseText); // but everything is in string
//         const data = JSON.parse(this.responseText) // data converted to json format
//         console.log(typeof data); // checking
//         console.log(data.data[0].email); // accessing
//     }
// }
// xhr.send();


// PROMISE-------------------- 🌟🌟🌟🌟🌟
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// There are three states of promise:
// 1. pending
// 2. fulfilled
// 3. rejected

//Each time you call new, a different instance is created.
const promiseOne = new Promise((resolve, reject) => {
    // Yahan par hote hai async tasks like Api calls, tidious operations, etc.
    setTimeout(() => {
        console.log("The aync setTimeout is completed. P1");
        resolve();
    }, 1000)
})

// Till here the promise has been created. But to consume it we use .then , .catch() , finally() methods.

promiseOne.then(() => { // .then() associates it with the resolution of promise
    console.log("Promise one is now resolved and consumed.");
});

// Chaining of promise 🌟🌟🌟
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This is async task of chaining promises. P2");
        resolve()
    }, 1000)
}).then(() => {
    console.log("Promise two Chaining promise is consumed");
})

// Passing something to resolve as an arguement in the promise 🌟🌟🌟
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The aync setTimeout is completed. P3");
        resolve({ username: "Siddhesh", points: "999" })
    }, 1000)
})
promiseThree.then((user) => {
    console.log(user);
})

// Handling the erros with reject() 🌟🌟🌟
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Abdullah", points: "9999" })
        } else {
            reject('Error: something went wrong. Please reload the page.')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user, 'P4 resolve');
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Either resolved or rejected this is will always run");
})


// Using async await and try catch FINALLY!!!!!!!!!!!!!!!! 🌟🌟🌟🌟🌟
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ car: "Lamborghini", model: "Gallardo" })
        } else {
            reject('Error: Salary is insufficient')
        }
    }, 1000)
});

// Here async await only handles the resolution and not rejection 🌟🌟🌟
// async function consumePromiseFive() {
//     const response = await promiseFive;
//     console.log(response);
// }

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) { // Now the error is handled gracefully
        console.log(error);
    }
}
consumePromiseFive()


// Fetch() - using actual API as an async action 🌟🌟🌟🌟🌟
// async function getUsersData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Try without writing async
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(`Error: ${error}`);
//     }
// }
// getUsersData();

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
    }).catch((error) => console.log(error))


// ❌❌❌------------------------------Topic-6-End-----------------------------------❌❌❌



// 💥💥💥💥 Topic 7- OOPS 💥💥💥💥
// Object oriented programming
// It is nothing but the way of writing a the program or the structure (programming pradigm)