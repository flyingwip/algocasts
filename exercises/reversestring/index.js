// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// as a classic function
// function reverse(str) {
//   return str.split('').reverse().join().replace(/,/g, '')
// }

//as an arrow function
// reverse = (str) => str.split('').reverse().join('')

// function reverse(str) {
//   console.log(str)
// }

// option 2
reverse = (str) => {
  debugger
  let reversed = ''
  for (character of str) {
    reversed = character + reversed
  }
  return reversed
}

reverse('hallo')

// option 3 with the reduce function!
// reverse = (str) => {
//   return str.split('').reduce((rev, char) => char + rev, '')
// }

module.exports = reverse

// var i = 0

// setInterval(() => {
//   console.log('iteration: ' + i)
//   i++
// }, 1000)
