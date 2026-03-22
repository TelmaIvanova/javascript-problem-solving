//Removes the first and last character of a given string.
//Uses an arrow function and slice(), where the negative index
//trims one character from the end

removeFirstAndLastChar = str => str.slice(1, -1)