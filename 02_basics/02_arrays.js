const marvel_heros = ["thor" , "Ironman" , "spiderman"];
const dc_heros = ["superman" , "flash" , "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][0]);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);
// console.log(allHeros[0]);
// console.log(allHeros[3]);
// console.log(allHeros[4]);


// spread Operator => concate / jodne mai hee kaam aata hai multiple arrays ko
// spread => ex: kaanch ke glass ko fek do abb uske kaanch bikhar jaaenge bss spread ka mean bhi vhi hai ki spread ho jaana/fel jaana
// const all_new_heros = [...marvel_heros , ...dc_heros];
// console.log(all_new_heros);



// const another_array = [1, 2, 3, [4, 5, 6], 7, [6,7, [4,5]]];

// const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);


// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"));
// console.log(Array.from({name : "hitesh"})); // interesting case for interviews

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3));








