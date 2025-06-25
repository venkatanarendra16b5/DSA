// check the given two arrays values are same or not
// Time Complexity: O(n)
// Space Complexity: O(n)
const areArraysEqual = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false;
    }
    let setValues = new Set(arr1)
    for(let i= 0;i<arr2.length;i++){
        if(!setValues.has(arr2[i])){
            return false;
        }
    }
}