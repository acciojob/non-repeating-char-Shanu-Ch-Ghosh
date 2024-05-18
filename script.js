function firstNonRepeatedChar(str) {
    // Step 1: Create a character count map
    const charCount = {};

    // Traverse the string and populate the character count map
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Step 2: Traverse the string again to find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

// Get user input
const input = prompt("Enter a string");

// Display the result
alert(firstNonRepeatedChar(input));

