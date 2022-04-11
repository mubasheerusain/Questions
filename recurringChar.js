let word = 'helloooLLeee';

const recurringChar = (str) => {
    let res = {};
    let expCounts = {};
    [...str].forEach((val, i) => {
        if (!expCounts[val]) {
            expCounts[val] = 0;
        }
        expCounts[val]++;
    })
    Object.keys(expCounts).map((key) => {
        if (expCounts[key] === Math.max(...[...Object.values(expCounts)])) {
            res[key] = expCounts[key]
        }
    })
    return res
}

console.log(recurringChar(word.toLocaleLowerCase()))