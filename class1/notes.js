// confidence to know that you know js that helps us to crack interviews 

// what mindset you need to learn js 
// .txt and .js file ziada koi difference nh hota h dono ko he source file ki tarhn deal kia ja skta h but the main thing is the .js file has some special means and syntax but .txt has no syntax and special means but in dono files mai aik main difference h kay in mai say konsi file hm kisi software mai enject kar kay execute karwa skty hain and software kia karta h jo file mai likha hua hota h usko process karta h kabhi output p show karwa dyta h and yeh sab kuch aik software karta h jisko hm interpreter ya compiler kehty hain ab yeh hamesha say browser mai he hide tha 

// Node.js aik js ka environment h and deno bh aik env h js ka 

// console.log("maadeha !");

// kuch bh info store karny ka game usko kaisy nikalna h bahar in an optimize way is programming 

// const matlb change nh karna h info ko and  no need to use cases just aisa word ya var ho jo readable ho 

// what is keyword ? 
// matlb software in ko smjhta h or in ka ik special kam hota h 

// var let ya const mily to software hamara usko memory mai store kardyta h ya assign kardo 

// const means locking the info 

// {} it is block jo kay js mai pehly tha he nh concept or var mai koi scope nh tha 
// shouldn't use this studentId = 30;

// let name ; // will give undefined 

// old version has many old concepts but many new has introduced 
// "use strict"; //treat all js code as newer version 
// alert(3+3); // we are using node and alert won't work in node it just works in browser
 
// code readability must be high
// tc39.es starting mai sab diff diff code likha karty thy ecmascript was a standard how js will be standaried 

// DATA TYPES (primmitive data types)
// number , bigint , string , boolean , null (stand alone value h or datatype bh h )(representation h null value ka) , undefined (jab value define he na ho) , symbol (uniqueness mainly react in react) 

// typeof(null) // answer will be object (people call it lan error)
// typeof(undefined) // answer will be undefined

// Conversion 
// let age = "33";
// jab hmy pta nh ho kay which type of value is coming from frontend and ab us data ko 100% confirm karny kay liyay kay yeh number he type ka h ya string he type ka h we uses typeof like this 
// let toNumb = Number(age);
// console.log(typeof(toNumb));

// agar hm ksi random string ko as a number convert karty hain like we have 33abc in age so kia yeh Number mai convert ho jay ga yes yeh ho jay ga yarr but is ka khud ka type hoga NaN 
// agar age mai null ho to woh result mai 0 dayga as 

// let score = null;
// let scoretoNumb = Number(score);
// console.log(typeof(scoretoNumb)); // number 
// console.log(scoretoNumb); // 0 

// In case of undefined it will be NaN 
// let score = undefined;
// let scoretoNumb = Number(score);
// console.log(typeof(scoretoNumb)); // number 
// console.log(scoretoNumb); // NaN


// let score = "maadeha";
// let scoretoNumb = Number(score);
// console.log(typeof(scoretoNumb)); // number 
// console.log(scoretoNumb); // NaN

// let score = true;
// let scoretoNumb = Number(score);
// console.log(typeof(scoretoNumb)); // number 
// console.log(scoretoNumb); // 1

// Boolean mai 
// 1 => true 
// 0 => false 
// "" => false
// "maadeha" => true

// **********************************OPERATIONS****************************************
// let val = 30;
// let negVal = -val;
// console.log((negVal));

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");

// good for questions not for coding so never try to write this type of code  

// console.log(+true);
// console.log(+"");

// readability is the most important part of code 

// let x = 3 ;
// let y = x++;
// console.log(`x is ${x} and y is ${y}`);

// ********************************* COMAPRISON BTW DIFF DATA TYPES **********************************

// console.log(null>0); //false
// console.log(null==0); //false
// console.log(null>=0); //true
// console.log(null<=0); //true

// The actual reason behind all this false and true is that comparion is converting a null to a number and treating it as 0.That's why null  

// console.log("2">1); //true
// console.log("02">1); //true 

// bcz js ny automatically is 2 ko convert kardia h number mai 
// jab bh comparision karo to kabhi bh diff data types na hon it must be in mind

// console.log(undefined == 0); //false
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false


// === strict check
// console.log("2" == 2) // it just itself convert string to num and answer will be true 
// console.log("2" === 2) // false as it will check the data type too

// Interview cracking summary for data types
// many channels shows that data types are of 3 types may be 7 types and so on but offical documentation has divided the data types in two main categories : primitive and non primitive (diff kia h dono mai call by value or call by reference ) kaisy ap data ko store kar skty ho or kaisy us ko access kar skty ho is difference ki base p hm primitive data types or non primitive data types ko categorize karty hain 

// primitive (call by value) 7 may be hain => yeh saray data types call by value hoty hain like kahen say kahen call karty hain to in ka reference nh dia jata h in ko copy kar kay dia jata h bus or agar hm koi change karty hain to woh copy mai hota h => String , boolean , number , undefined , null , symbol , bigint 

// non primitive ya refrence type => so yeh woh values hain jin ka memory mai referenvce allocate kia ja skta h like arrays , objects and functions 

// Is JS dynamically typed language h ya static typed h ? 
// In a dynamically typed language: Variables do not have a fixed type. The type of a variable is determined at runtime based on the value assigned to it. You can assign a value of one type to a variable and then later assign a value of a different type to the same variable without errors.

// const bigInt = 4555544555444n;
// console.log(typeof(bigInt));


// let num1 = Symbol(123);
// let num2 = Symbol(123);
// console.log(num1 == num2);

// typeof Operators results 
// Type of val                                                Result 
// Undefined                                                  "undefined" 
// Null                                                       "object"
// Boolean                                                    "boolean"
// Number                                                     "number"
// String                                                     "string"
// Object(native and does not implement ()call)               "object"
// Object(native or host and does  implement ()call)         "function"
// Object(host and does  implement ()call)                    "undefined","boolean","number","string"

// func ka return h object function 

// memory kaisy kam karti h js mai ??
// there are two types of memory => stack and heap
// We have to know right now is that where they are using now ? 
// The main thing to always remember is that jab bh hm stack memory ki bat karty hain we must know kay yeh sirf primitive data types kay liyay kam karti h jahn p hmaray pass and heap memory always work for reference variables 
// jb bh stack memory use hoti h to is ka matlb yeh h kay jo bh apny variable declare kia h us ki aik copy milti h apko ....
// jb bh heap memory use hoti h to is ka matlb yeh h kay jo bh apny variable declare kia h us ka aik reference milta h apko ....


// let ytName = "hiteshchaudhary";
// let anotherytName = ytName;
// anotherytName = "chaiorcode";
// console.log(ytName);
// console.log(anotherytName);

// The logic or reason behind this output is that jb hmny anotherytName bnaya or us mai ytName ko access kia to wahn p bcz of stack hmy aik copied value mili or jab hmny copy change ki to orignal value ko kuch nh hua 

// let user1 = {
//   name:"maadeha",
//   passion:"programming"
// }                                     

//ab yeh kion kay non primitive data type h so that heap say jab hm wapis say reference layty hain to hmy copy nh mila ga balky orignal data ki reference milta hay 

// let user2 = user1;
// user2.name = "maryam";
// console.log(user1.name);
// console.log(user2.name);

// ab mai ajisy he user2 say value ko change karain gay to woh bcz actual data ka ref h to actual data change ho jay ga  


