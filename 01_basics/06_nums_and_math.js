const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);


// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

const otherNumber = 112.49;

// console.log(otherNumber.toPrecision(3));



const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.round(4.4));
// console.log(Math.round(4.5));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.floor(4.9));


// console.log(Math.sqrt(36));


// console.log(Math.min(4 , 3 , 6 , 8));
// console.log(Math.max(4 , 3 , 6 , 8));


console.log(Math.random());  // Hamesha 0 and 1 ke bich mai hee values aayegi
console.log( (Math.random() * 10 )); // Multiply 10 krne sai values ekk step left mai shift ho jaaegi and abb first value 0 nhi aayegi
console.log( (Math.random() * 10 ) + 1);  // +1 isliye kiya hai kyoki ho skta hai left shift krne sai pehle hamare pass random number ho 0.023 mtlb decimal ka just next number bhi 0 ho islie +1 krne sai abb ye surity hai ki first value 0 too nhi aayegi
console.log( Math.floor(Math.random() * 10 ) + 1);  // ho skta hai random number ho 0.1 and abb jab ham Math.floor use krenge too ye too 0 random number de dega so +1 krne sai ye too surity hogyi hai ki 0 too nhi aayega minimum 1 too aayegi hee

const min = 10;
const max = 20;

 console.log( Math.floor(Math.random() * (max - min + 1)) + min);   // THIS IS VERY IMPORTANT FORMULA