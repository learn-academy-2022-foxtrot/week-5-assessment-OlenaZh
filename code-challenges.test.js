// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

//---------------------------------------------------------------------------------------------------------------

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("codedMessage", () => {
        it("takes in a string and returns a coded message.", () => {
            const secretCodeWord1 = "Lackadaisical"
            // Expected output: "L4ck4d41s1c4l"
            const secretCodeWord2 = "Gobbledygook"
            // Expected output: "G0bbl3dyg00k"
            const secretCodeWord3 = "Eccentric"
            // Expected output: "3cc3ntr1c"
          expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
          expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
          expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
        })
      })
// FAIL ReferenceError: codedMessage is not defined


// b) Create the function that makes the test pass.

// I create a function and name it codedMessage. 
// I pass string as a parameter 
// Next, I use a .split() method to convert my string into array and I will store this array in a new variable -> newArr 
//Then I use .map() method to iterate through my array and check a value of every element. 
//I also use method .toLowerCase() to convert each element into lower case. 
//I create if statement which will compare the value of each element and if value will be = 'a', the value will be changed to '4', "e" to 3, "i" to 1, and "o" to 0.
//I return/store the values of modified array in mappedArr. 
//I use .join() method to convert my array back to string.

const codedMessage = (string) => {
  newArr = string.split('')
  mappedArr = newArr.map((value) => {
    if (value.toLowerCase() === 'a') {
      value = '4'
    } else if (value.toLowerCase() === 'e') {
      value = '3'
    } else if (value.toLowerCase() === 'i') {
      value = '1'
    } else if (value.toLowerCase() === 'o') {
      value = '0'
    } 
    return value
  })
  return mappedArr.join('')
}

// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a coded message. (1 ms)

//------------------------------------------------------|| OPTION-2| FOR LOOP ||-------------------------------------

//In this option I used a for loop instead of .map() method. This was actually my Option N1, because using for loop helped me to understand logic of the .map() method better. After that I decided to try .map() and finally got the logic of this method. :)

// const codedMessage = (str) => {
//   newArr = str.split('')
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i].toLowerCase() === 'a') {
//       newArr[i] = '4'
//     }  else if (newArr[i].toLowerCase() === 'e') {
//       newArr[i] = '3'
//     }  if (newArr[i].toLowerCase() === 'i') {
//       newArr[i] = '1'
//     }  if (newArr[i].toLowerCase() === 'o') {
//       newArr[i] = '0'
//     }
//   }
// return newArr.join('')
// }
// PASS  ./code-challenges.test.js
// codedMessage
// ✓ takes in a string and returns a coded message. (1 ms)

//------------------------------------------------------------------------------------------------------------

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("wordsWithAorE", () => {
  it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    expect(wordsWithAorE(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect(wordsWithAorE(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})
//FAIL ReferenceError: wordsWithAorB is not defined 

// b) Create the function that makes the test pass

// I create a function and name it wordsWithAorE. 
// I pass 2 parameters -> array and query/letter
//Then I use .filter() method to iterate through my array and check a value of every element. 
//I also use method .toLowerCase() to convert each element into lower case. 
//The .filter() method will iterate through the array, check every element and return only the elements which contains required letter. For this purpose I use .includes() method.


const wordsWithAorE = (arr, query) => {
  return arr.filter((element) => element.toLowerCase().includes(query.toLowerCase()))
}

// PASS  ./code-challenges.test.js
// wordsWithAorB
// ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter. (1 ms)

//------------------------------------------------------------------------------------------------------------

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouseCheck", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a full house.", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    // Expected output: true
    expect(fullHouseCheck(hand1)).toEqual(true)
    expect(fullHouseCheck(hand2)).toEqual(false)
    expect(fullHouseCheck(hand3)).toEqual(false)
    expect(fullHouseCheck(hand4)).toEqual(true)
  })
})

//FAIL  ReferenceError: fullHouseCheck is not defined

// b) Create the function that makes the test pass.

// I create a function and name it fullHouseCheck. 
// I pass one parameter -> array
// I create a variable count1 where I will store data of how many times the first element of array repeats. 
// I set up 1 as a value of count1 variable because the first element will appear in the array at least once.
//In addition I create a variable -> count2. I will use it to count elements for the second part of the full house combination. And the value of the variable is 0 because we have not started counting of the element. 
//I create a variable first_value to store the first element of my array. 
//in second_value I will store values of the element which are not equal to the first value.
// I use variable called result to return function result -> true or false 
// Then use for loop to iterate though my array starting from the second element of the array. 
// If array element = to first value the count1 will be incremented by 1.
//If array element is not = to the first element I assign it to the second_value variable 
// I create a second for loop to calculate how many times the second value repeats in my array. 
//After that I  create a conditional statement where I check if we have one pair and one three of a kind.
//return true if it is a full house otherwise return false.



const fullHouseCheck = (arr) => {

  let count1 = 1
  let count2 = 0
  let first_value = arr[0]
  let second_value
  let result

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] === first_value) {
      count1 = count1 + 1
    } else {
      second_value = arr[i]
    }
  }

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] === second_value) {
      count2 = count2 + 1
    }
  }

  if ((count1 === 2 && count2 === 3) || (count1 === 3 && count2 === 2)) {
    result = true
  } else {
    result = false
  }

  return result
}

//PASS