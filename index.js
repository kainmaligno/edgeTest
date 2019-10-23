/**
 * @function  findSum
 *  1. Given an array with n integers and a number k, can you determine if there is a pair of 2 elements that
 *   sums to k? Create a simple program that will return the indices of the first encounter of the correct 2
 *   numbers. You may manipulate the array if necessary
 * */

function  findSum(nums, k) {
    console.log(nums, k)
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        //  console.log(`${nums[i] + nums[j]}  y es igual a ${k} ?`) 
        let indexI = nums[i]
        let indexJ = nums[j]
        let posI = i
        let posJ = j
        if (indexI + indexJ === k) {
          return console.log(`the value in position ${posI} is ${indexI} and plus the value of position ${posJ} is ${indexJ}, and they sum ${k}`)
        }
      }
    }
  }
  
   findSum([12, 5, 8, 1, 7, 9, 22, 21, 4, 32, 1], 33)


  /**
   * @function countOccurences
   *  2. Given a string, create a simple program that will return the number of occurrences of each letter. The
   *  result should not ignore case.
   *  
   */

  function countOccurences(word){
    let counter = {}
    let wordJoin = word.replace(/\s/g, "");
    let spliten = wordJoin.toLowerCase().split('')
     spliten.reduce((prev,actual) => {
       prev[actual] = (prev[actual] || 0) +1
       return prev
     },counter)
     console.log(counter)
    }
 
 
    countOccurences("Purple People Eater")