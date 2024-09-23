// console.log("maadeha Let's start it !");
// const name = "Ahmad";
// const age = 30;
// console.log("The boy "+ name + " is of age " + age);
// // modern code don't use this type of code as above:
// console.log(`The boy ${name} is of age ${age} 👍`);
// // now a days we use this code as it is modern 

// one more way to declare a string is that : 
// const name = new String("maadeha Shaikh");
// yahn p string aik object h coming in key value pair 
// console.log(name.__proto__); //{}
// console.log(name.toUpperCase());  // this won't change the orignal string bcz of stack 

// Write all string methods => help in interview 
// console.log(name.substring(0,7));  //maadeha
// slice // can get -ve values 
// trim // spaces ko remove kardyta h start and end ki 
// replace // kisi bh value ko kisi ko replace kardo 
// .includes //=> kia is string mai yeh include h ?
// split say hota yeh h kay kisi bh special char ki base p slit kardo it can be - or "" or , etc

// JS string methods : 
// https://www.w3schools.com/js/js_string_methods.asp


// *********************************************************************************
// explicit typed : 
// const balance = new Number(100); 
// console.log(balance);
// console.log(balance.toFixed(2)); //100.00 

// console.log(balance.toPrecision(3)); //100
// console.log(balance.toPrecision(2)); //1.0e+2

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); //1,000,000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000 indian standards 

// max value and min value 

// -----------------------------------MATHS---------------------------------------
// math library js ki by default js kay sath ati h 
// console.log(Math); // its an obj that has alot of properties 
// absolute //-ve +ve mai convert ho jata h 
// round // function h jaisy normally hm karty hain 
// ceil // top wala he choose karon ga mai jaisy 4.2 ko bh 5 he kardy ga 
// floor // means neechy ka he choose karay ga 4.2 ko 4 kary ga 

// console.log(Math.floor(5.6)); // ko bh 5 he show kary ga 
// console.log(Math.max(5,3,2,8,0));
// Math.random hamesha 0 say 1 kay bech mai he answer day ga 
// console.log(Math.floor(Math.random()*10)+1); 

// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random()*(max-min+1))+min);

// --------------------------------------------------------------------------------------
// date ka aik object 
// let mydate = new Date();  // type of this is obj
// console.log(mydate); //2024-09-22T08:54:10.841Z
// console.log(mydate.toString()); //Sun Sep 22 2024 13:56:27 GMT+0500 (Pakistan Standard Time)
// console.log(mydate.toLocaleString()); //9/22/2024, 1:57:10 PM
// console.log(mydate.toLocaleDateString()); // 9/22/2024

// month 0 say start hoty hain 
// let createdDate = new Date(2023,1,23,6,43,4);
// let createdDate = new Date("10-03-2024");
// console.log(createdDate.toLocaleString()); //1/23/2023, 6:43:04 AM

// let myTimeStamp = Date.now();
// console.log(myTimeStamp); //1726995808106 milisecond h yeh
// console.log(createdDate.getTime()); //1727895600000
// console.log(Math.floor(Date.now()/1000)); //jab bh seconds chahiyay hon mili sec say 
// Date.now hamesha milisec mai answer dyta h usko sec mai convert karny kay liyay we / 1000 

// Customize date by your own
// let newdate = new Date();
// myTimeStamp.toLocaleString('default',{
//    weekday:"long"
// })

// ------------------------------------ARRAYS --------------------------------------
// array enables storing a collection of multiple items under a single variable
// js arrays are resizeable , contains a mix of diff data types 
// js array copy opeartions create shallow copies.
// shallow copy of an object is a copy whose properties share the same reference matlbn yahn jo change hoga orignal array mai bh woh change ho jay ga 
// Deep copy of an object is a copy whose properties do not share the same reference 

// const array1 = [1,2,3,4,5,6];
// const array2 = new Array("maadeha","shaikh","learning","js");
// console.log(array2[2]);

// when we arite the same this line in browser what happen is that const array1 = [1,2,3,4,5,6]; array1 gave something interesting which is 

// array methods : 
// push () pop() unshift() .includes .indexOf .join(bind bh kardyta h or string mai bh convert kardyta h)
// slice and splice (slice mai last wala num exclude hota h and splice mai include hota h its a one difference)
// splice main array mai say value ko he nikal dayta h or slice aisa nh karta h 

// let arr1 = [0,4,true,"hello"];
// let arr2 = ["apples","guava","oranges"];
// arr1.push(arr2);
// console.log(arr1);
// arr1 has now arr2 inside it

// but concat will give you a new array so 
// arr3 = arr1.concat(arr2);
// console.log(arr3);

// spread operator matlb phail jana 
// const arr3 = [...arr1 , ...arr2] // modern way
// console.log(arr3);

// const arr1 = [1,2,3,[5,8],3,[9,0,[34,55],8],10,20];
//flat => returns a new array with all sub array elements concatenated into it recursively upto specified depth
// const flat_arr1 = arr1.flat(3);
// console.log(flat_arr1);

//kabhi kabhi data alag alag formats mai ata h like node list , objs ya strings mai but hmy array mai chahiyay to 

// console.log(Array.isArray("Maadeha")); //false
// console.log(Array.from("Maadeha")); // ['M', 'a', 'a','d', 'e', 'h','a']
// console.log(Array.from({name:"Maadeha"})); // give false bcz jab woh bna nh pata array to [] yehi dayta h 
// we have to tell it kay value ka array banna h ya key ka 

let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]

// Master objects and events you'll learn everything in JS 
// there are 2 methods of declaring objects aik literal ki tarhn aik constructor ki tarhn 
// here comes the concept of sinlgeton 
// jab hm constructor say object ko bnaty hain to singleton banta h 
// yani yeh apni tarhn ka aik he obj h 
// jab hm literals ki tarhn declare karty hain OBJ ko to REMEMBER kabhi bh singleton nh banta h 
// object.create => yehi contructor kehlata h 

// OBJ LITERALS :
// const user= {
//   name:"maryam",
//   age:30,
//   isLoggedIn:false,
//   Study:["bachelors","deeni course"],
//   "lastName":"shaikh"
//  }
// to remember the concept => you can never access "last name" using user.last name it will give an error

// console.log(user.age);
// console.log(user["age"]);
// console.log(user.lastName); // will give undefined isi liyay orefer h kay hm [] wala syntax use karain
// console.log(user["lastName"]);

// suppose we have a symbol and if hmy is ko as a key add karwana h yeh interview question h 
const mySym = Symbol("key1");
const user= {
  name:"maryam",
  age:30,
  isLoggedIn:false,
  Study:["bachelors","deeni course"],
  "lastName":"shaikh",
   [mySym]:"my symbol"
 }
// console.log(user[mySym]); // giving string type but we want type as symbol 
// console.log(user); // => result is below due to [] it is showing mySym as Symbol
// {
//   name: 'maryam',
//   age: 30,
//   isLoggedIn: false,
//   Study: [ 'bachelors', 'deeni course' ],
//   lastName: 'shaikh',
//   [Symbol(key1)]: 'my symbol'
// }

// INTERVIEW QUESTIONS 
// .freeze say we can't do any change 
user.age = 40;
// Object.freeze(user);
user.age = 67; // 67 execute he nh hua h 
// console.log(user);

// FUNCTION TYPE1 CITIZEN KI TARHN HOTY HAIN 
// user.greeting = function(){
//   console.log("Hello JS user !");
// }
// user.greeting2 = function(){
//    console.log(`Hello JS user :${this.name}`);  // string interpolation
// }
// console.log(user.greeting); // console.log(user.greeting()); => what's  the difference in both of them 
// console.log(user.greeting()); //Hello JS user !
// console.log(user.greeting()); //Output =>  Hello JS user ! undefined 
// console.log(user.greeting2()); //Output => Hello JS user :maryam undefined
// undefined is liyay aa rha  h bcz aik execution khud say hota h we'll see more on it 

// ---------------------------------------------singleton -----------------------------------------------
const Obj = new Object();
// console.log(Obj);

const regularUser = {
  email:"regularuser@gmail.com",
  fullname:{
    userfullname : {
     firstname : "maadeha",
     lastname:"shaikh"
    }
  }
}

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.firstname); this ? is use when api say agar data he nh aa rha ho to its a protection 


// COMBINING OBJECTS :
const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3); //OUTPUT => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } 

const Obj3 = {...obj1 , ...obj2};
// console.log(Obj3);  // OUTPUT => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } 


// ARRAY OF OBJECTS 
// console.log(Object.keys(user)); 
//give all the keys in an array[ 'name', 'age', 'isLoggedIn', 'Study', 'lastName' ]

// console.log(Object.values(user)); //[ 'maryam', 67, false, [ 'bachelors', 'deeni course' ], 'shaikh' ]

// console.log(Object.entries(user)); // => below is the output
// [
//   [ 'name', 'maryam' ],
//   [ 'age', 67 ],
//   [ 'isLoggedIn', false ],
//   [ 'Study', [ 'bachelors', 'deeni course' ] ],
//   [ 'lastName', 'shaikh' ]
// ]

// boht bar yeh case hota h we have to check kay hm jo property access kar rhy hain API say kia woh exist karti h bh ya nh ?? so to check it we use : 
// console.log(user.hasOwnProperty('Study')); // true bcz yeh property h 
// console.log(user.hasOwnProperty('Age')); //false bcz age h Age nh h 

// ----------------------------------last video of Objects --------------------------------

// DESTRUCTURING OF ARRAY :
const deStructure = {
  courseName : "Js by procoder",
  price:'6k',
  courseInstructor:'anurag singh'
}

//if we wanna access 3 times deStructure.courseInstructor(); it will be very messy in the code and to make it precise aand clean in code we use destructuring =>  its a syntactical sugar 

const {courseInstructor : instructor  , price : RP , courseName:CN} = deStructure; // GOT IT
// console.log(RP);
// console.log(CN);

// array ko bh kia jata h destructure 

// apna kam kisi or say karwana is API => menu card h aik api ki documentation
// json mai ati hain values ab from api pehly xml mai ati thi jo kay boht he difficult thi 
// jab bh hamara data hm api say lain to hm usko obj mai convert kardyty hain or ab kion kay we know about obj so we ccan easily do it 

// kabhi kabhi api bh array mai milti hain 

// ---------------------FUNCTIONS ANDPARAMETERS---------------------
const myFun = function() {
  console.log("hello I am function !");
}
myFun()  // => execution 
myFun //Reference bta rhy hain yeh func bus is line mai rehta h 
// fun ki definition mai jo value hoti h woh parameters hoty hain and jo func call kay time jo value hoti h woh arguments hoty hain 

// acha we have 2 differences here one is kay 
