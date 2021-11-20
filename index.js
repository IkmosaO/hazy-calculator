const calculate = (array) => {
  let newArray = []
  const operators = ['+', '-', '*', '/']

  for (let index = 0; index < array.length; index++) {

    if (array[index] === undefined || array[index] === '') continue

    if (typeof array[index] === 'number') {
      newArray.push(array[index])
      continue
    }

    if (array[index] === null) {
      newArray.push(0)
      continue
    }

    if (!isNaN(Number(array[index]))) {
      newArray.push(Number(array[index]))
      continue
    }

    if (operators.includes(array[index])) {
      newArray.push(array[index])
      continue
    }
  }
  if (newArray.length < 3) return NaN

  switch (newArray[1]) {
    case '+':
      return newArray[0] + newArray[2]

    case '-':
      return newArray[0] - newArray[2]

    case '*':
      return newArray[0] * newArray[2]

    case '/':
      return newArray[0] / newArray[2]
  }
}

module.exports = calculate
