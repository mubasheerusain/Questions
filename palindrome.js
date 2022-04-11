const isPalindrome = (str) => {
    return str.toString() === [...str.toString()].reverse().join('');
};

console.log(isPalindrome("Able was I ere I saw Elba".toLocaleLowerCase()))