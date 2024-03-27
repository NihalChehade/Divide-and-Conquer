function findRotationCount(sortedRotatedArr) {
    let pivotIndex = findPivotIndex(sortedRotatedArr);
    if(pivotIndex === -1){
        return 0
    }else{
        return pivotIndex + 1;
    }
}

function findPivotIndex(arr){
    let leftIndex = 0;
    let rightIndex = arr.length -1;

    while(leftIndex < rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if(arr[middleIndex] > arr[middleIndex + 1]){
            return middleIndex;
        }else if(arr[middleIndex] < arr[middleIndex -1]) {
            return middleIndex - 1;
        }else if(arr[leftIndex]> arr[middleIndex]){
            rightIndex = middleIndex -1;
        }else{
            leftIndex = middleIndex + 1;
        }
    }
   return -1
}
module.exports = findRotationCount