// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {}

// maxChar = (str) => {
//   const temp = str.split('')
//   let similar = {}

//   for (const iterator of temp) {
//     if (similar.hasOwnProperty(iterator)) {
//       similar[iterator].push(true)
//     } else {
//       similar[iterator] = []
//     }
//   }

//   var propmax = '',
//     max = 0

//   for (const property in similar) {
//     // console.log(`${property}: ${similar[property].length}`)
//     if (similar[property].length >= max) {
//       max = similar[property].length
//       propmax = property
//     }
//   }
//   return propmax
// }

maxChar = (string) => {
  charMap = {}
  let maxChar = '',
    max = 0

  // first create object with character as keys with counter
  for (let char of string) charMap[char] = charMap[char] + 1 || 1

  // now loop through object and return maxChar
  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }
  return maxChar
  //   console.log(maxChar)
}

// console.log(maxChar('Hello there'))
console.log(maxChar('a'))
// console.log(maxChar('aabbc'))
// console.log(maxChar('aaabcccccccd'))
// console.log(maxChar('apple 1231111'))

module.exports = maxChar
