// Dates

let myDate = new Date();
// console.log(myDate.toString());     //Wed May 29 2024 07:46:59 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Wed May 29 2024
// console.log(myDate.toLocaleString());   //5/29/2024, 7:46:59 AM
// console.log(typeof(myDate));   // object


// let myCreatedDate = new Date(2023 , 16 , 23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023 , 0 , 23 , 5 , 3);
// let myCreatedDate = new Date("2023-12-14");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));



let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());


// console.log(` Hy the date is : ${newDate.getDay()} and the time is :  `);

let nayi = newDate.toLocaleString('default' , {

    weekday: "long"

});

console.log(typeof nayi);