// const square = function (x) {
//   return x * x
// }

// console.log(square(8))

// const squareArrow = x => {
//   return x * x
// }

// const squareArrow = x => x * x

// console.log(squareArrow(9))

// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
const getFirstName = fullName => {
  return fullName.split(' ')[0]
}

console.log(getFirstName('Jace Babin'))

const getFirstNameShort = fullName => fullName.split(' ')[0]

console.log(getFirstNameShort('Jace Babin'))
