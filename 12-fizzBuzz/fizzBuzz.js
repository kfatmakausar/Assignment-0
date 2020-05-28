function fizzBuzz(start, end) {
  var myArray = [];
  while (start<=end) {
      if(start%3 === 0 && start%5 === 0) {
        myArray.push('FizzBuzz');
      }
      else if (start%3 === 0) {
        myArray.push('Fizz');
      }
      else if(start%5 === 0) {
        myArray.push('Buzz');
      }
      else {
        myArray.push(start);
      }
  start++;
  }
return myArray;
}

// Do not edit this line;
module.exports = fizzBuzz;