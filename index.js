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



    /**
     * @function countPeaks 
     * @param array
    * 3. Given an array of strictly positive integers, determine the number of elements that are greater than
the adjacent elements (further known as peaks). If an adjacent element is an equal value, it would only
count as a peak if the next divergent number is smaller than the current element. Assume that there are
0 values outside of the bounds of the array, which may lead to a peak. e.g. [1, 2, 2, 3, 4, 3, 5, 3, 2, 1, 2,3, 3, 3, 2, 2, 1, 3] can be thought of as 0, [1, 2, 2, 3, 4, 3, 5, 3, 2, 1, 2, 3, 3, 3, 2, 2, 1, 3], 0 and would
thus have the parenthesized peaks [1, 2, 2, 3, (4), 3, (5), 3, 2, 1, 2, (3, 3, 3), 2, 2, 1, (3)]
    */

   function countPeaks(arr) {
    let peaksIndex = []
    let counterPikes = 0
    let lastIndex = arr.length-1
    let firstIndex = 0
    //check if it is more than 2 index
    if(arr.length <= 2) return console.log("array must be larger");

   //check if it is negative numbers
   for(let i= 0; i <= arr.length; i++){
   if(arr[i] < 0){
     console.log(`There is some negative number in the array in  position ${i}`)
     break
   }
     //conditional
    if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]){
        peaksIndex.push(i)
        
        counterPikes += 1
    }else if(arr[i] === arr[i-1] && arr[i] === arr[i + 1]){
      peaksIndex.push(i)
      counterPikes += 1
    } 
   }
     if(arr[arr.length-1] > arr[arr.length-2]){
      peaksIndex.push(lastIndex)
      counterPikes += 1
      console.log(arr[0])
    }
    if(arr[0] > arr[1]){
      peaksIndex = [0, ...peaksIndex]
     counterPikes += 1
    }
   
      console.log(peaksIndex)
      console.log(counterPikes)
    
    
}
countPeaks([1, 2, 2, 3, 4, 3, 5, 3, 2, 1, 2, 3, 3, 3, 2, 2, 1, 3])

