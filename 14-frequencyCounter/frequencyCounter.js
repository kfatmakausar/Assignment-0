function frequencyCounter(word) {
  var frequencyCounter = {};  //create empty object

  //loop through every letter in the string
  for (var i =0; i < word.length; i++) {
    if (frequencyCounter[word[i]]) {
      frequencyCounter[word[i]] +=1;
    }
    else {
      frequencyCounter[word[i]] =1;
    }
  }
  return frequencyCounter;

}

// Do not edit this line;
module.exports = frequencyCounter;