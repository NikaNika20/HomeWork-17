// 1. Arrow Function და ორი რიცხვის დაჯამება:
// დაწერე Arrow Function, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს. მაგალითად: const add = (a, b) => a + b;

// const add = (a, b) => console.log(a + b);
// add( 30 , 50)


// 2. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ შორის სხვაობას. მაგალითად: (function(a, b) { return a - b; })(8, 3);

// let sum = function(x , y){
//     console.log(x - y)
// }
// sum( 17 , 2)


// 3. Arrow Function
// დაწერე რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის ლუწი (თუ ლუწია დააბრუნებს true). მაგალითად: const isEven = (num) => num % 2 === 0;

// const isEven = (num) => num % 2 === 0;

// console.log(isEven(4));
// console.log(isEven(5));


// 4. Callback Function და გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც გამოიყენებს ამ რიცხვების ნამრავლის დასათვლელად:

// function multiply(a, b, callback) {
//     return callback(a, b);
// }
// const multiplyCallback = (a, b) => a * b;
// const result = multiply(5, 3, multiplyCallback);


// 5. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის დადებითი. მაგალითად: const isPositive = (num) => num > 0;

// const isPositive = (num) => num > 0;

// console.log(isPositive(5)); 
// console.log(isPositive(-3));   


// 6. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს რიცხვს და დააბრუნებს მის გაორმაგებულ მნიშვნელობას. მაგალითად: (function(n) { return n * 2; })(5);

// let sum = function(num){
//     console.log(num * 2)
// }
// sum(69)

// 7. დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს ამ რიცხვის გაორმაგებულ მნიშვნელობას:


// function doubleNumber(num, callback) {
//     const doubledValue = callback(num);
//     console.log(doubledValue);
// }

// const doubleCallback = (n) => n * 2;

// doubleNumber(69, doubleCallback);



// 8. Arrow Function და რიცხვის ნაშთის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, თუ ნაშთია რიცხვის გაყოფისას 3-ზე (მაგალითად, არის თუ არა რიცხვი 3-ზე გაყოფადი). მაგალითად: const isDivisibleByThree = (num) => num % 3 === 0;

// const isDivisibleByThree = (num) => num % 3 === 0;
// console.log(isDivisibleByThree(9));


// 9. Callback Function და რიცხვის გადამოწმება:
// დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას, და გამოიძახებს Callback-ს, რომ შეამოწმოს, არის თუ არა ეს რიცხვი ლუწი.

// function checkEven(num, callback) {
//     console.log(callback(num));
// }
// const evenCheckCallback = (num) => num % 2 === 0;
// checkEven(4, evenCheckCallback);


// 10. Arrow Function და რიცხვის კუბის გამოთვლა:
// Arrow Function, რომელიც მიიღებს რიცხვს და დააბრუნებს მის კუბს. მაგალითად: const cube = (num) => num * num * num;

// const cube = (num) => num * num * num;
// console.log(cube(3));


// 11. Callback Function და მარტივი გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს მათ ნამრავლს.

// function multiplyNumbers(a, b, callback) {
//     return callback(a, b);
// }
// const multiplicationCallback = (a, b) => a * b;
// const multiplicationResult = multiplyNumbers(2, 3, multiplicationCallback);
// console.log(multiplicationResult); 


// 12. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, არის თუ არა რიცხვი ნულზე მეტი. მაგალითად: const isGreaterThanZero = (num) => num > 0;

// const isGreaterThanZero = (num) => num > 0;
// console.log(isGreaterThanZero(1));


// 13. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის ნახევარს. მაგალითად: (function(n) { return n / 2; })(10);
// Callback Function და რიცხვის დამატება:

// const half = (function(n) { return n / 2; })(10);
// console.log(half); 



// 14. დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც შეაჯამებს ამ რიცხვებს.

// function addNumbers(a, b, callback) {
//     console.log(callback(a, b));
// }
// const additionCallback = (a, b) => a + b;
// addNumbers(4, 5, additionCallback);


// 15. Arrow Function, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის კვადრატს. მაგალითი: const square = (num) => num * num;

// const square = (num) => num * num;
// console.log(square(4));
