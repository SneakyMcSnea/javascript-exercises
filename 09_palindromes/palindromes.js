const palindromes = function (str) {
    let strArray = Array.from(str);
    let lettersOnly = strArray.filter((char) => {
        return (/[A-Za-z0-9]/).test(char)});
    let lettersOnlyLower = lettersOnly.map((char) => char.toLowerCase())
    let lettersOnlyReversed = lettersOnlyLower.toReversed();
    let strLowerLetters = lettersOnlyLower.join("");
    let strLowerLettersReversed = lettersOnlyReversed.join("");
    return (strLowerLetters === strLowerLettersReversed) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
