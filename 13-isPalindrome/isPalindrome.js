function isPalindrome(word) {
  word = word.toLowerCase();
  var result= true;
  var i = 0;
  while (result != false && i<word.length){
      if (word.charAt(i) === word.charAt(word.length-1-i)) {
          result = true;
      }
      else {
        result = false;
      }
      i++;
    }
    return result;
  }
  

// Do not edit this line;
module.exports = isPalindrome;