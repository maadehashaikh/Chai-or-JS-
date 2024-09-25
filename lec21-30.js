// let a = 10 ;
// const b = 30 ;
// var c = 20;

// {} // is scope actually
// global scope and local scope => why we don't use var and why let introduced ?  
// // NESTED SCOPES 
// // closure aise technique h jo kay DOM kay bad ziada better smjh ati h 
// function one (){
//   const name = "maadeha";
//   function two (){
//     const website = 'YT';
//    console.log(name);
//   }
//   //console.log(website);  // not accesable bcz website isn't accesible outside the scope
//   // website is not defined => error coming
//   two();
// }
// one();    // will return only maadeha 

// if(true){
//   const username = 'hitesh';
//   if(username == true ){
//     const website = ' at yt';
//     console.log(username + website);
//   }
//   // console.log(website);  out of scope 
// }
// console.log(username); out of scope 

//----------------------------------INTERESTING POINT------------------------------------
// console.log(addOne(55));
// const func = function addOne (num){
//    return num + 1;
// }
  // this all is called as expression   

// jab hm var mai hold kardyty hain fun ko to aisay call karny p error dayta h bcz of scopes

// console.log(addOne(23));
// function addOne (num){
//     return num + 1;
//   }  // hoisting h yeh 


// const user = {
//    userName : "hitesh",
//    price:999,
//    welcomeMessage : function (){
//     console.log(`${this.userName} , welcome to website `) //This means current context 
//     console.log(this);

// First Output of This 
// hitesh , welcome to website 
// {
//   userName: 'hitesh',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

// Second Output of This 
// mano , welcome to website
// {
//   userName: 'mano',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

//   }
// }
// user.welcomeMessage(); //hitesh , welcome to website
// user.userName = "mano";
// user.welcomeMessage(); //mano , welcome to website 
// here is the functionality of this 

// Broswer ky andar global object window h 

// function chai (){
//   let username = 'hitesh';
//   console.log(this.username);
// }
// chai();   // undefined coming as this won't work

// const chai = () => {
//     let username = 'hitesh';
//     console.log(this.username); // undefined 
//   }
//  chai(); // undefined 

// const addOne = (num1,num2) => {
//     return num1 + num1 ; 
//   }
// addOne(1,3);

// const addTwo = (num1,num2) =>  num1 + num2 ; // implicit return khud return karta h 
// console.log(addTwo(1,3));

// const addTwo = (num1,num2) =>  (num1 + num2) ;
// console.log(addTwo(1,3))

const addTwo = (num1,num2) =>  ({name:'maadeha'}) ;
console.log(addTwo(3,4)); //{ name: 'maadeha' }


// IIFE (Immediately Invoked Function Expression)
// (function chai (){
//   console.log(`DB connected`);
// })()  
// (function definition)(for execution)
 
// jo function immediately execute ho jay but asal mai IIFE ki need kion h ?? main motive is that hm global scope  kay pollution say problem hoti h or us kay pollution ko hatany kay liyay we use IIFE


// (function chai (){ //Named IIFI
//   console.log(`DB connected`);
// })();  // asal mai jab hm semi colon nh lagty to IIFE ko pta nh hota kay context ko rokna kahn p h 

// ((name) => {
//   console.log(`DB connected TWO ${name}`);
// })('maadeha') 

// 2 IIFE aik sath likh dain 

function myfun (){
  console.log("I am myfun");
}




