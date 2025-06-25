//write a function that takes a string and returns the number of each character in the string

const countCharacter = (str) => {
    let charCount = {};
    for (let char of str) {
        let lowerChar = char.toLowerCase();
        if (/[a-z0-9]/.test(lowerChar)) {
            if (charCount[char]) {
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }
    }
    charCount = Object.entries(charCount).sort((a, b) => a[0].localeCompare(b[0]));
    return charCount;
}

 // This function counts the occurrences of each character in a string, ignoring case and non-alphanumeric characters.
 // It returns an array of character counts sorted alphabetically by character.
// The function iterates through each character in the string, converts it to lowercase, and checks if it is alphanumeric.
// If it is, it increments the count for that character in the `charCount` object
// If the character is not already in the object, it initializes its count to 1.
// Finally, it converts the object to an array of entries and sorts them alphabetically by character.
// This is a more concise version of the function that achieves the same result.
const countCharacter1 = (str) => {
    let charCount = {};
    for (let char of str) {
        let lowerChar = char.toLowerCase();
        if (/[a-z0-9]/.test(lowerChar)) {
            charCount[lowerChar] = (charCount[lowerChar] || 0) + 1;
        }
    }
    return Object.entries(charCount).sort((a, b) => a[0].localeCompare(b[0])); // This sorts the character counts alphabetically by character
}



// Another version of the function

const countCharacter2 = (str) => {
    let charCount = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }
    return Object.entries(charCount).sort((a, b) => a[0].localeCompare(b[0]));
}

const isAlphaNumeric = (char) => {
    char = char.charCodeAt(0);
    if( !(char >= 48 && char <= 57) && // 0-9
        !(char >= 65 && char <= 90) && // A-Z
        !(char >= 97 && char <= 122)) { // a-z
        return false;
    }
    else {
        return true;
    }
}

const isValidAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    let charCount = {};
    for (let char of str1) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }
    for (let char of str2) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (!charCount[char]) {
                return false;
            }
            charCount[char]--;
            if (charCount[char] < 0) {
                return false;
            }
        }
    }
    return true;
}
