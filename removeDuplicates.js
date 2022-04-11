let arr = [1, 1, 1, 1, 2, 1, 2, 3, 4, 5, 5, 5, 5];

const removeDuplicates = (arr) => {
    let res = [];
    arr.map((val) => {
        if (!res.includes(val)) {
            res.push(val)
        }
    })
    return res;
}

console.log(removeDuplicates(arr));