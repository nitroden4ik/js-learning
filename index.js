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

/*Create an array of objects representing employees and use the sort method to sort the employees by their names in ascending order.


const employees = [
  {name: 'John'},
  {name: 'Peter'},
  {name: 'Ben'},
  {name: 'Trevor'},  
]
employees.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
})

*/
//Create an array of numbers and use the forEach method to print the square of each number in the array.
/*
const numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(element => element * element);

squaredNumbers.forEach(element => {
  
  console.log(element)
});

*/

/*Create an array of strings and use the includes method to check if a certain word is present in the array.
let userInput = prompt('Enter a fruit')
const myStrings = [
  'banana',
  'apple',
  'watemelon',
  'coconut',
]

if(myStrings.includes(userInput.toLowerCase())){
  alert('yeah, its on the list')
} else {
  alert('nope')
}

*/

/*Create an array of numbers and use the indexOf method to find the first occurrence of a certain number in the array.
const numbers = [1, 2, 3, 4, 5];
const target = 4;

const index = numbers.indexOf(target);

if(index !== -1){
  alert(`the first occurance of ${target} is at ${index}`)
} else {
  alert('it is not in array')
}
*/

/*Create an array of numbers and use the splice method to add a new number to the array.

const numbers = [1, 2, 3, 4, 5];
numbers.splice(5,0 ,6)
console.log(numbers)

*/

/*Create an array of numbers and use the slice method to create a new array with the first n numbers of the original array.

const numbers = [1, 2, 3, 4, 5];

numbers.splice(5, 0 , 6,7,8,9,)
console.log(numbers)

*/

/*Create an array of numbers and use the concat method to merge two arrays into a single array.

const array1 = [1, 2, 3, 4, 5];
const array2 = [6,7,8,9,10];

let arrayConcat = array1.concat(array2);
console.log(arrayConcat)
*/
/*Create a class for a basic shape (e.g. rectangle, square, circle) with properties for its width, height, and area.

class rectangle {
  constructor(width, height, area){
    this.width = width;
    this.height = height;
    this.area = area;
  }
  get area() {
    return this.width * this.height;
  }
}
*/

/*Create a class for a person with properties for their name, age, and address.

class person {
  constructor(name, age, address){
    this.name = name;
    this.age = age;
    this.address = address
  }
}
//Create a class for a car with properties for its make, model, year, and color.

class car {
  constructor(made, model, year, color){
    this.made = made;
    this.model = model;
    this.year = year;
    this.color = color;
  }
}
*/
/*Create a class for a bank account with properties for the account holder's name, account number, and balance.

class bankAccount {
  constructor(name, accNumber, balance){
    this.name = name;
    this.accNumber = accNumber;
    this.balance = balance;
  }
}

//Create a class hierarchy for different types of vehicles (e.g. car, truck, motorcycle) and implement methods for each vehicle type to perform unique actions such as honk, rev engine, pop a wheelie, etc.
/*
class Vehicle {
  constructor(name, model, year){
    this.name = name;
    this.model = model;
    this.year = year;
  }

  honk(){
    console.log('Beep Beep!');
  }
}

class Car extends Vehicle {
  constructor(name, model, year, numDoors){
    super(name, model, year)
    this.numDoors = numDoors;
  }
  engineSound() {
    console.log('Vroom vroom!');
  }
}

class Truck extends Vehicle {
  constructor(name, model, year, numWheels){
    super(name, model, year)
    this.numWheels = numWheels;
  }
  engineSound(){
    console.log('RumbleRumble!')
  }
}

const car = new Car('BMW', 'X5', 2006, 4);
console.log(car.name);
console.log(car.model);
console.log(car.year);
console.log(car.numDoors);
car.honk();

const truck = new Truck('Hummer', 'H2', 2010, 5);
console.log(truck.name);
console.log(truck.model);
console.log(truck.year);
console.log(truck.numWheels);
truck.honk();

*/

/*Create a class for a bank account with properties for the account holder's name, account number, and balance. Implement methods for depositing and withdrawing money from the account.

class bankAccount {
  constructor(holdersName, accountNumber, balance){
    this.holdersName = holdersName;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }


deposit(amount) {
  this.balance += amount;
}

withdraw(amount){
  if(amount < this.balance){
    this.balance -= amount;
  } else {
    console.log('Insufficient funds...what a poor guy')
  }
}
}

const myAccount = new bankAccount('Den', 123123123, 10000);
console.log(myAccount);

myAccount.deposit(1000);
console.log(`$ ` + myAccount.balance);

myAccount.withdraw(10000);
console.log(`$ ` + myAccount.balance);

myAccount.withdraw(2000);
console.log(`$ ` + myAccount.balance);

*/

/*Create a class for a hotel room reservation system with properties for the room number, number of guests, check-in and check-out dates, and total cost. Implement methods for booking a room, checking the availability of a room, and calculating the total cost of a reservation.

class hotelRoom {
  constructor(roomNumber, guestsNumber, checkinDate, checkoutDate, totalCost){
    this.roomNumber = roomNumber;
    this.guestsNumber = guestsNumber;
    this.checkinDate = checkinDate;
    this.checkoutDate = checkoutDate;
    this.totalCost = totalCost;
  }

  booking(guests){
    if(guests < this.guestsNumber){
      this.roomNumber -= guests;
      console.log('Your room is ready and ' + freeRooms.roomNumber + ' rooms available');
    } else {
      console.log('Sorry, we dont have much space');
    }
  } 
 

  checking(date){
    if(date !== this.checkinDate){
      console.log('This date is free and you can book a room!');
    } else {
      console.log('This date is booked');
    }

  }

  totalCostValue(money){
    if(money >= this.totalCost){
      console.log('You can afford it');
    } else {
      console.log('You broke man as hell');
    }
  }
}
const freeRooms = new hotelRoom(20 , 20, '04-2023', '05-2023', 1000);
//const myRoom = new hotelRoom(1, 2, '03-2023', '04-2023', 1000);

freeRooms.booking(2);

freeRooms.checking('03-2023');

freeRooms.totalCostValue(2000);

*/

/*Create a class for a library management system with properties for the library's name, list of books, and number of books. Implement methods for adding and removing books from the library, checking the availability of a book, and searching for a book by title or author.

class libraries {
  constructor(libName, listOfBooks, numberOfBooks){
    this.libName = libName;
    this.listOfBooks = [];
    this.numberOfBooks = numberOfBooks;
  }

  addBook(bookName, bookAuthor){
    this.listOfBooks.push({name: bookName, author: bookAuthor});
    console.log(bookName, bookAuthor + ' is added to our library');
  } 
  
  
  removeBook(bookName, bookAuthor){
    for(let i = 0; i < this.listOfBooks.length; i++){
    if(this.listOfBooks[i].name === bookName && this.listOfBooks[i].author === bookName, bookAuthor){
      this.listOfBooks.splice(i, 1);
      console.log(bookName, bookAuthor + ' is removed from our library')
    } break;
  }}

  checkBook(bookName, bookAuthor){
    for(let i = 0; i < this.listOfBooks.length; i++){
      if(this.listOfBooks[i].name === bookName && this.listOfBooks[i].author === bookAuthor){
      console.log('We have your book')
      break;
    } 
  }
  console.log('We dont have it');
  }


  }

  const books = new libraries('UK Library', [], 5);
  books.listOfBooks.push({name: 'Book1', author: 'Author1'});
  
books.checkBook('Book1', 'Author1');
books.addBook('Book2','Pushkin');

books.removeBook('Book1', 'Author1');

books.checkBook('Book1', 'Author1');
*/

//Create a class for a student management system with properties for the student's name, ID number, list of courses, and grades. Implement methods for adding and removing courses, calculating the student's GPA, and generating a transcript.

//I'm getting `Your average grade is null` in VS Code... but it runs on playcode.io fine...wtf??
/*
class Students{
  constructor(name, id, listOfCourses){
    this.name = name;
    this.id = id;
    this.listOfCourses = [];
 
  }

  addCourse(courseName, courseGrade){
    this.listOfCourses.push({courseName, courseGrade});
    console.log('Your course is added to the list')
  }

  removeCourse(courseName){
    for(let i = 0; i < this.listOfCourses.length; i ++){
      if(this.listOfCourses[i].courseName === courseName){
        this.listOfCourses.splice(i ,1);
        console.log('Course removed');
        break;
      }   
      } 
      console.log('No such course');
   
    }
  

  averageGrade(){
    let result = 0;
    for(let i = 0; i < this.listOfCourses.length; i++){
      result += this.listOfCourses[i].courseGrade;
    } 
    let average = result/this.listOfCourses.length; 
    console.log(`Your average grade is ${average}`);
  }
}

let myCourse = new Students('Den', 111, [] );
myCourse.addCourse('JavaScript', 3);
myCourse.addCourse('HTML', 4);
myCourse.addCourse('CSS', 3);

myCourse.averageGrade(); //getting `Your average grade is null` wtf???


console.log(myCourse);

*/

/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
  let even = [];
  let odd = [];
  for(let i = 0; i < integers.length; i++){
    if(integers[i] % 2 === 0){
      even.push(integers[i]);
      console.log(even)
    } else {
      odd.push(integers[i]);
      console.log(odd)
    }
  } return even.length === 1 ? even[0] : odd[0];
}

findOutlier([1,2,3,4,5,6]);

*/
//some random task from yt.. seems like I've done it already...
//sort an array with ascend and descend functions
const marks = [1,43, 32, 12,13,5,3,2]

function findMin () {

    for(i = 0; i < marks.length; i++){
      marks.sort((a, b) => a - b)
      console.log(marks)
      
    }
}

function findMax(){
  for(i = 0; i < marks.length; i++){
    marks.sort((a, b) => b - a)
    console.log(marks)
    
  }
}
