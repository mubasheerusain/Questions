let arr = [90, 100, 1, 0, 23, -12, -100000000000];

const minMax = (arr) => {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { 'min': min, 'max': max };
}
console.log(minMax(arr));

let string = 'some thing some thing something';

const findIndex = (char, str) => {
    let res = [];
    [...str].map((val, index) => {
        if (val === char) {
            res.push(index);
        }
    })
    return res;
};

console.log(findIndex('e', string))
