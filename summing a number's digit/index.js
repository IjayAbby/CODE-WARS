//Instructions.
//Write a function named sumDigits which takes a number 
//as input and returns the sum of the absolute value of each 
//of the number's decimal digits. For example:

  //sumDigits(10);  // Returns 1
  //sumDigits(99);  // Returns 18
  //sumDigits(-32); // Returns 5


//Provide the sum of all the digits in the number.
//convert a negative number to a positive number.

function sumDigits(number){
    let result = 0;
    Math.abs(number)
    .toString()
    .split("")
    .map(str=>{result+=Number(str)})
    return result
}

console.log(sumDigits(-32));
