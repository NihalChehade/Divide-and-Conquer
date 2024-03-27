function sortedFrequency(sortedArr, num) {
    
    let firstOccurenceIndex = findFirstOccurence(sortedArr, num);
    if(firstOccurenceIndex === -1) return -1;
    let lastOccurenceIndex = findLastOccurence(sortedArr, num);
    return (lastOccurenceIndex - firstOccurenceIndex) + 1;
}

function findFirstOccurence(sortedArr, num){
    let leftIndex=0;
    let rightIndex = sortedArr.length -1;

    while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if((middleIndex===0 || sortedArr[middleIndex-1] < num) && sortedArr[middleIndex]=== num){  
           return middleIndex;
        }else if(sortedArr[middleIndex] < num){
          leftIndex = middleIndex + 1;
      }else {
          rightIndex = middleIndex -1;
      }  
    }
      return -1;
}


function findLastOccurence(sortedArr, num){
    let leftIndex=0;
    let rightIndex = sortedArr.length -1;

    while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if((middleIndex === sortedArr.length - 1 || sortedArr[middleIndex + 1] > num)&& sortedArr[middleIndex] ===num){
            return middleIndex;
          }else if(sortedArr[middleIndex] > num){
            rightIndex = middleIndex -1;
          }else{
            leftIndex = middleIndex + 1;
          }
        }
        return -1;
}

module.exports = sortedFrequency