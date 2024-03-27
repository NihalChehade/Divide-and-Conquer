function countZeroes(sortedArr) {
  let leftIndex=0;
  let rightIndex = sortedArr.length -1;
  let firstZeroIndex;
 
  while(leftIndex<=rightIndex){
    let middleIndex = Math.floor((leftIndex + rightIndex)/2);
    if((middleIndex===0 || sortedArr[middleIndex-1]===1) && sortedArr[middleIndex]=== 0){  
        firstZeroIndex = middleIndex;
        return sortedArr.length - firstZeroIndex
    }else if(sortedArr[middleIndex]===1){
        leftIndex = middleIndex + 1;
    }else{
        rightIndex = middleIndex - 1;
    }  
    
  }
  return 0;
  
}

module.exports = countZeroes