function findFloor(sortedArr, floorOf) {
    leftIndex = 0;
    rightIndex = sortedArr.length - 1;
   
    if(sortedArr[rightIndex] <= floorOf){
        return sortedArr[rightIndex];
    }
  
  while(leftIndex < rightIndex){
    let middleIndex = Math.floor((leftIndex + rightIndex)/2);
    if(sortedArr[middleIndex] === floorOf){
        return sortedArr[middleIndex];
    }else if(middleIndex > 0 && sortedArr[middleIndex - 1] <= floorOf && floorOf < sortedArr[middleIndex]) {
        return sortedArr[middleIndex - 1];
      }else if(floorOf < sortedArr[middleIndex]){
           rightIndex = middleIndex -1;
      }else{
        leftIndex = middleIndex +1;
      }
  }
  return -1;
}

module.exports = findFloor

