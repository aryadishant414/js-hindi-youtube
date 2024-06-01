const name = "hitesh";
const repoCount = 50;

// console.log(name + repoCount + " Value");  // outdated Syntax

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);  // this is MODERN syntax and prefer to use this only  THIS IS CALLED AS STRING INTERPOLATION


const gameName = new String('hitesh-hc-com');

// console.log(gameName[0]);
// console.log(gameName.__proto__);



// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


// const newString =  gameName.substring(0 , 4);  // 2nd waali value will not be included
// console.log(newString);


// const anotherString = gameName.slice( -8 , 4);
// console.log(anotherString);

// const anotherString = gameName.slice( 4 , -5);
// console.log(anotherString);

// NOTE : -ve values sirf SLICE method() mai hee de skte hai hamm subSting() method mai nhi de skte

// const newStringOne = "    hitesh           ";
// console.log(newStringOne);
// console.log(newStringOne.trim());  // trim() method will remove all the unwanted spaces

const url = "https://hitesh.com/hitesh%20choudhary";

// console.log( url.replace('%20' , '-') );

// console.log( url.includes('sundar') );


console.log(gameName.split('-'));