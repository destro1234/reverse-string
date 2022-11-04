function reverseString(str) {
  let reversedString = []
  let splitString = str.split("")
  let i = 1

  for (const letter of splitString) {
    let letterToAdd = splitString[splitString.length-i]
    reversedString.push(letterToAdd)
    i++
  }

  return reversedString.join("")
}



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("Expectin: 'sailE");
  console.log("=>", reverseString("Elias"));
}

module.exports = reverseString;


// Please add your pseudocode to this file
// And a written explanation of your solution


// PseudoCode

// define function that accepts a string as an argument
// define reversed_String variable set to an empty array
// definie index variable set to 1
// split string into array of letters

// loop through each character in the string
// iterte through each letter in reverse by increasing the index and assign letter to a variable
// add variable from string to  the empty array
// join the letters in array to a string

// return reversed_string in reverse order

// If you iterate over the string, then take each character and bring it to the front
// of the string then the word will be reversed. We can do this by collecting all the
// letters in reverse order and then join those letters into a string and then returning
//  that string.