function countVowels(str) {
    const vowels = "aeiou";
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            counter++;
        }
    }
    return counter;
}

console.log(countVowels("racecar"));