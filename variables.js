//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 
let myName = 'Akintomiwa';
console.log(myName);
//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE
let faveNum = 7;
console.log(faveNum);
//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE
let lovesCode = true;
//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE
if (faveNum === 7) {
console.log('lucky 7!');
}
  else {
  console.log('not lucky 7');
} 
//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out the numbers from 1 through 5.
*/

//CODE HERE
const myNum = [1, 2, 3, 4, 5];
for (let i = 0; i < myNum.length; i += 1) {
  console.log(myNum[i]);
}