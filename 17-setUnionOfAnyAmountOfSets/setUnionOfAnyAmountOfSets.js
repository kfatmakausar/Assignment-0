function setUnionOfAnyAmountOfSets(...args) {
  return args.reduce((previous, current) => {
    var union = [new Set([previous, current])]
  });
  return union;
}


// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;