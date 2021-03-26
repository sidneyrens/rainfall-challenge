const input1 = '3 1 5 2 2 4 7 3 6 9'
const input2 = '1 10'
const input3 = '5 1 0 2 5 8 2 3 4 7 9 3 5 7 8 9 1 2 5 4 3 3 3 5 2 1'
const input4 = '4 0 2 1 3 2 1 0 4 3 3 3 3 5 5 2 1'

buildCells = (nums) => {
  const workableArray = nums.split(' ')
  const dimension = workableArray[0]
  workableArray.shift()

  console.log('nums', workableArray)
  console.log('dim', dimension)

  
}

buildCells(input1)