// Primitive dataTypes  => call by value

// 7 Types : String , Number , Boolean , null , undefined , Symbol , BigInt

// NOTE : JS is Dynamically typed language coz in this we dont need to tell JS the DATATYPE of the variable that we are writing RUNTIME par jo likha hai uske hisaab sai JS automatically wo DataType maan leta hai and baadme hamm isko change bhi krr skte hai


const score = 100;      // number
const scoreValue = 100.3;  // number

const isLoggedIn = false;  // boolean
const outsideTemp = null;   // khaali / NUll
let userEmail;   // or => let userEmail = undefined;        // undefined

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);


const bigNumber = 34658844515784655845n;




// Non-Primitive / Reference Type  => call by reference

// Array , Objects , Functions
// NOTE : jitne bhi non-primitive datatypes hai inka RETURN TYPE => Object hee aata hai

const heros = ["shaktiman" , "naagraj" , "doga"];

let myObj = {
    name : "dishant" ,
    age : 22 ,
};


const myFunction = function() {
    console.log("Hello World");
}

// console.log(typeof(myFunction));  // fuction Object

// console.log(typeof(myObj));  // Object

// console.log(typeof(heros));  // Object



// console.log(typeof(id));  // Symbol


// console.log(typeof(anotherId));  // Symbol





//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom";

let anotherrname = myYoutubename;
anotherrname = "chaiaurcode";

// console.log(myYoutubename);
// console.log(anotherrname);

let userOne = {

    email : "user@google.com", 
    upi : "user@ybl"

};

let userTwo = userOne;

userTwo.email = "hitesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);