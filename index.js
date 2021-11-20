const calculate = (array) => {
  let newArray = []
  const operators = ['+', '-', '*', '/']

  for (let index = 0; index < array.length; index++) {
    const element = array[index]

    if (element === null) {
      newArray.push(0)
      continue
    }

    if (!isNaN(Number(element))) {
      newArray.push(Number(element))
      continue
    }

    if (operators.includes(element)) {
      newArray.push(element)
      continue
    }

    if (element === undefined || element === '') continue

    if (typeof element === 'number') {
      newArray.push(element)
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
