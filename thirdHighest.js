let arr = [2, 6, 9, 8, 4, 2, 0, 8, 5, 7, 7, 0, 8, 9];

const thirdHighest = (arr) => {
    arr.sort();
    let temp = [...new Set(arr)]
    if (temp.length > 3) {
        return temp[temp.length - 3]
    }
}

console.log(thirdHighest(arr));