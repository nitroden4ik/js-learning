/*Write a function that takes two numbers as arguments and returns their sum.
let num1 = 1;
let num2 = 2;

function myFunction(){
    
    console.log(num1+num2);

}
myFunction();
*/

/*Write a function that takes an array of numbers and returns the average of the numbers.

let numbers = [
    1,
    2,
    3,
    4,
    5,
]

function findAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
  findAverage(numbers) 

  */

 /*Write a function that takes a number as an argument and returns its factorial.

function factorial(myNumber){
  let result = 1;
  for(i = myNumber; i > 1; i--){
    result *= i;
  }
  return result
}
  console.log(factorial(6));
  */

  /*Write a function that takes a string and returns the number of vowels in it.

function countVowels(str){
  let vowels = 'aoueiAOUEI';
  let count = 0;
  for(i = 0; i < vowels.length; i++){
    if(vowels.indexOf(str[i]) !== -1){
    count++;
    }
  }
  return count;
}
console.log(countVowels('sfr'))

*/

/*Write a function that takes a string and returns the number of consonants in it.

function countConsonant(str){
  let consonants = 'qwrtpsdfghjklzxcvbnm'
  let counter = 0;
  for( let i = 0; i < consonants.length; i++){
    if(consonants.indexOf(str[i]) !== -1){
      counter++
    }
  }
  return counter;
}
console.log(countConsonant('bigmac'))

*/

//Write a function that takes an array of strings and returns a string that concatenates all the elements of the array.

/*


let myArray = [
  'I',
  'Love',
  'Bigmac',
];

function concatenateArray(myArray) {
  let result = "";
  for (let i = 0; i < myArray.length; i++) {
    result += myArray[i] + ' ';
  }
  return result;
}

console.log(concatenateArray(myArray));
*/

//simple counter with add and clear button


//Write a program that takes an input of a character and outputs whether it is a vowel or a consonant.

/*
const vowels = ['e', 'u', 'i', 'o', 'a',];
let userInput = prompt('Enter a character');
let i = null

function checkCharacter(){
  switch (true) {
    case vowels.includes(userInput.toLowerCase()):
      alert('it is a vowel');
      break;
    case userInput.length > 1:
      alert('too many characters');
      break;
     case !isNaN(userInput):
      alert('it is a number')
      break;
    default: alert('it is a consonant')
  }
}
checkCharacter()

*/

/*Write a program that takes an input of a year, and outputs whether it is a leap year or not.


function checkYear() {
  let userInput = prompt('Enter a year');
  return parseInt(userInput) % 100 === 0 ?  parseInt(userInput) % 400 === 0 : parseInt(userInput) % 4 === 0;
  
}

alert(checkYear(userInput));
*/


/*Write a program that takes an input of a grade (A, B, C, D, or F) and outputs its equivalent numeric score (4 for A, 3 for B, 2 for C, 1 for D, and 0 for F).
const gradesAlphabet = [  'A',  'B',  'C',  'D',  'F',];
const gradesNumeric = [  4,  3,  2,  1,  0,];

let userInput = prompt('Enter your grade');

let index = gradesAlphabet.indexOf(userInput.toUpperCase());

if (index !== -1){
  alert(`your numeric score is  ${gradesNumeric[index]}`)
} else {
  alert('not a grade')
}

*/

/*Write a function that takes a string as an argument and returns "Yes" if the string is not empty, and "No" otherwise.

let userInput = prompt('Enter anything');

if (userInput.length > 0){
  alert('Yes')
} else {
  alert('No')
}
*/

/*Write a function that takes a temperature in Celsius as an argument and returns the equivalent temperature in Fahrenheit.

let userInput = prompt('Enter temperature in Celsius');

result = (Number(userInput) * 9/5) + 32;
if(!Number(userInput)){
  alert('enter a number!')
} else {
  alert(result)
}

*/

/*Write a function that takes a number as an argument and returns "Even" if the number is even, and "Odd" otherwise.
let userInput = prompt('Enter a number');

(function (){
  return Number(userInput) % 2 === 0 ? alert('it is even number') : alert('it is odd and weird');

}
)();
*/

/*
---------------------------------------------------------------
Arrays and Array methods like map, filter, reduce, etc.
---------------------------------------------------------------
lets go
*/
/* Create an array of numbers and use the map method to square each number in the array.

let numbers = [1, 2, 3, 4, 5];


//for(i = 0; i < numbers.length; i ++){
  
  let squaredNumbers = numbers.map(num => num * num);
  
    console.log(squaredNumbers)
}
*/


  /*Create an array of objects representing books and use the filter method to find all books with a certain author.
const books = [
{name: 'book 1',
author: 'Gogol',},

{name: 'book 2',
author: 'Tolstoy',},

{name: 'book 3',
author: 'Dostoevsky',},

{name: 'book 4',
author: 'Dostoevsky',},

]
let searchAuthor = "Tolstoy";
let authorBooks = books.filter(book => book.author === searchAuthor);
console.log(authorBooks);

*/

/*Create an array of numbers and use the reduce method to find the sum of all the numbers.

const numbers = [1, 2, 3, 4, 5];
const numbers2 = [5, 5, 5, 5, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15

const sum2 = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(sum2); // Output: 25
*/
