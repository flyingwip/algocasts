// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {}

// by compare string reverse
// palindrome = (str) => {
//   return str === str.split('').reverse().join('')
// }

left_right = (str, splitter) => {
  let left = str.slice(0, splitter / 2)
  let right = str.slice((splitter / 2) * -1)
  return [left, right]
}

// by splitting and compare splits
// palindrome = (str) => {
//   let splitter = str.length
//   if (str.length % 2) {
//     lgth = str.length - 1
//   }
//   const [left, right] = left_right(str, splitter)
//   return left === right.split('').reverse().join('')
// }

// by using the every function
palindrome = (str) => {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  })
}

// palindrome('tenet')
// palindrome('abba')
console.log(palindrome('tenet'))
// console.log(palindrome('abba'))

module.exports = palindrome
