let arrayTest = [1, 2, 3, 4]

console.log(arrayTest)

let arrayTestCopy = arrayTest

// arrayTestCopy.push(5)

arrayTestCopy = arrayTest.map((el) => {
  return el * 2
})

console.log(arrayTest)
console.log(arrayTestCopy)
