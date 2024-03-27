function findRotatedIndex(sortedRotatedArr, num) {
    
    let pivotIndex = findPivotIndex(sortedRotatedArr);
    console.log("pivot is :", pivotIndex);
    if(pivotIndex === -1){
        return searchSubArrForNum(sortedRotatedArr, 0, sortedRotatedArr.length -1,  num);
    }
    
    if(sortedRotatedArr[pivotIndex] === num){
        return pivotIndex;
    }else if(num < sortedRotatedArr[0]){
        console.log("serach right arr");
       return searchSubArrForNum(sortedRotatedArr, pivotIndex + 1, sortedRotatedArr.length -1,  num);
    }else{
        console.log("serach left arr");
       return searchSubArrForNum(sortedRotatedArr, 0, pivotIndex - 1,  num);
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

function searchSubArrForNum(arr, left, right, target){
    while(left < right){

        let middleIndex = Math.floor((left + right)/2);
        if(arr[middleIndex] === target){
            return middleIndex;
        }else if(arr[middleIndex + 1] === target){
            return middleIndex + 1;
        }else if(arr[middleIndex - 1] === target){
            return middleIndex - 1;
        }else if(arr[middleIndex] > target){
            right = middleIndex - 1;
        }else{
            left = middleIndex + 1;
        }
    }
    return -1

}

module.exports = findRotatedIndex

