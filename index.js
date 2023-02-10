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
