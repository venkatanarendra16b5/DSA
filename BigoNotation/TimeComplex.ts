// Big O Notation Example: Adding numbers from 1 to n
// This code demonstrates different time complexities using functions that add numbers from 1 to n.
// It includes a simple loop, a formula-based approach, and an example of nested loops.
const addUptoN = (n) =>{
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Time Complexity: O(n)
// This function calculates the sum of numbers from 1 to n using the formula n(n+1)/2
// This is a more efficient way to calculate the sum, with a time complexity of O(1).
// It avoids the need for a loop and directly computes the result.
const addUptoNFormula = (n) =>{
    return(n*(n+1))/2;
}

// Time Complexity: O(n)
// This function counts up from 1 to n and then counts down from n to 1
// It has a time complexity of O(n) because it contains two separate loops, each iterating n times.
const countUpAndDown = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
    for (let j = n; j >= 1; j--) {
        console.log(j);
    }
}

// Time Complexity: O(n^2)
// Example of nested loops
// This function prints all pairs (i, j) for i and j from 0 to n-1
// It has a time complexity of O(n^2) because there are two nested loops.
const PrintPairs = (n) =>{
    for(let i=0;i<n;i++){
        for(let j = 0;j<n;j++){
            console.log(`(${i}, ${j})`);
        }
    }
}

// Time Complexity: O(n)
// This function prints numbers from 0 to n-1, but it uses Math.max to ensure it always runs at least 5 times.
// This is an example of a loop that can adapt based on the input value n.
// If n is less than 5, it will still print 0 to 4.
const PrintMaxLoop = (n) => {
    for (let i = 0; i < Math.max(5,n); i++) {
        console.log(i);
    }
}

// Time Complexity: O(1)
// This function prints numbers from 0 to 4, but it will only run up to n times if n is less than 5.
// This is an example of a loop that has a fixed upper limit of 5, regardless of the input value n.
// If n is greater than 5, it will still only print 0 to 4
const PrintMinLoop = (n) => {
    for (let i = 0; i < Math.min(5, n); i++) {
        console.log(i); 
    }
}


console.log("Sum of numbers from 1 to 5:", addUptoN(5)); // Output: 15
console.log("Sum of numbers from 1 to 5 using formula:", addUptoNFormula(5)); // Output: 15
console.log("Counting up and down for n=3:", countUpAndDown(3)); // Output: 1, 2, 3, 3, 2, 1
console.log("Pairs for n=3:", PrintPairs(3)); // Output: (0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)