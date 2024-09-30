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

// const addTwo = (num1,num2) =>  ({name:'maadeha'}) ;
// console.log(addTwo(3,4)); //{ name: 'maadeha' }


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



// LECTURE # 25 
// how code executes in js and how call stacks work 
// JS execution context  =>(jpo file apny bnai h woh kaisy execute hogi ?)
// js 2 phase mai apki file ko run karti h => sab say pehly jo chez apky code say banti h woh h global EC 
// 1) Global execution context  => jahn bh GEC banta h wahn p this kay andar woh rakh dia jata h  
// => To remeber that browser ka GEC or Node ka GEC alag alag hota h 
// browser kay aandar this ki value window object ati h 
// JS single threaded h 
//2) Functional Execution Context 
// 3) bh hota h but woh mongo mai jis ko we call (eval Execution Context)

// how js ka code execute => divide into 2 phases => memory creation phase          => execution phase 
//                                                => sirf memory mai jagh li jati h => code execute hota h

// how will be the JS execution context of this code ? 

// let val1 = 10 ;
// let val2 = 5 ;
// function addNum (num1,num2){
//   let total = num1 + num2 ;
//   return total ;
// }
// let result1 = addNum(val1,val2);
// let result2 = addNum(2,4);

// STEP 1
// GLOBAL EXECUTION => this 

// STEP 2
// MEMORY PHASE 
// val1 -> undefined 
// val2 -> undefined 
// addNum -> definition (matlb poora funtion ka kam)
// result1 -> undefined 
// result1 -> undefined 

// STEP 3
// EXECUTION PHASE 
// val1 <- 10
// val2 <- 5 
// addNum -> (actually yeh addNum aya h from the line let result1 = addNum(val1,val2) ; )
// Remember that when we execute a function it creates its own [new variable environment + execution thread] but always see the memory phase and EC from the definiion of function 
//Memory phase -> (val1 -> undefined) (val2 -> undefined) (total -> undefined)
//EC           -> (num1 <- 10) (num2 <- 5)  (total <- 15) and yeh total kion kay return statement kay sath hay to hm isko return kardyty hain GEC mai 
// TO REMEMBER JO GEC HM NY FOR addNum KAY LIYAY BNAYA THA WOH AB DELETE BH HOGA 
// AB JO 15 VALUE TOTAL SAY GEC MAI GAI THI WOH STEP 3 MAI EP MAI addNum KO CHLAY JAY GE 

// STEP 3
// EXECUTION PHASE 
// val1 <- 10
// val2 <- 5 
// addNum <- 15 (FROM ABOVE PROCESS)

// same chez let result2 = addNum(2,4); is line kay bh hoga 

//ANOTHER IMPORTANT TOPIC ->  call stack 
// sab say pehly GEC aay ga then apky function aty jaty hain stack mai or delete hoty jaty hain .....acha issue kab hota h jab hm nested functions use karty hain ....  so hota aisay h if we have one ()
//  method and one() method is calling two() method so ab stack mai LIFO ka rule hota h isi liyay jo last mai method aya h woh fisrt out hota h  


// LECTURE # 26 
//CONTROL FLOW YA LOGIC FLOW => jab user login ho to yeh code dikhy and jab logout ho to yeh code dikhy 

let balance = 800;
// if (balance >500) console.log("test"),console.log("isi if ka part h but not at all good practice");


// Truthy and falsy values 
// jab hm assue kar lain gay kay string mai jo value h woh truthy value h so isi ko hm truthy ya falsy values bolty hain

// const email = '';  // falsy
// const email = 'maadeham@gmail.com'; //truthy
// if(email){
//   console.log("you have your email");
// }
// else {
//   console.log("you don't have your email");
// }

// [] //this is truthy values 

// false , 0 , -0 , bigInt 0n , "" , null , Nan , undefined 
// in kay ilawa ko truthy bolty hain

//Truthy values 
// [0] its not zero its an element inside an array , 'false' (anything in string is truthy) , [] , {} , " "(space is truthy) , function(){} -> truthy h 

// const emptyObj = {};
// if(Object.keys(emptyObj).length === 0){    // Object.keys(emptyObj) yeh apko aik array dyta h 
//   console.log(`empty object is empty now`)
// } 


// false == 0  //true
// false == '' //true
// 0 == '' //true

//NULLLISH/NULL COALESCING OPERATOR (??) : null undefined 
// matlb jb hm database ko use karty hain aksar to us ka response kabhi kabhi null ya undefined aa jata h us case mai we use this 
 
// Its a fall back 

let val1 ;
// val1 = 5 ?? 20 ;            // 5 answer
// val1 = null ?? 20 ;         // 20 answer
// val1 = undefined ?? 30      //30
// val1 = 100 ?? undefined     //100
// val1 = null ?? undefined ;  //undefined
// val1 =  undefined ?? null ; //null
console.log(val1); 

