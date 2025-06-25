// Space Complexity Analysis
// Space complexity refers to the amount of memory space required by an algorithm as a function of the input size. It is often expressed in Big O notation, similar to time complexity. Here are some examples of space complexity:
// Space Complexity Example: Calculating the sum of an array
// Space Complexity: O(1)
const sumOfArrayElements = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Space Complexity: O(n)
// This function creates a new array to store the squares of the input array elements.
// The space complexity is O(n) because it requires additional space proportional to the size of the input array.
// The new array will have the same number of elements as the input array.
const squareOfArrayElements = (arr) => {
    let squares:any = [];
    for (let i = 0; i < arr.length; i++) {
        squares[i] = 2 * arr[i];
    }
    return squares;
}