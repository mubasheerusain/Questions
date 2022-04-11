let arr = [9, 2, 1, 5, 4, 8, 6, 7, 3];

const myPromise = (arr) => new Promise((resolve, reject) => {
    setTimeout(() => {
        let max_even = arr.sort().filter((e) => e % 2 == 0).pop();
        let min_odd = arr.sort().filter((e) => e % 2 != 0)[0];
        if (max_even !== undefined && min_odd !== undefined) {
            resolve([min_odd, max_even])
        }
        else {
            reject('failed')
        }
    }, 2000)
});

myPromise(arr).then(([min, max]) => {
    console.log(min, max);
}).catch((err) => console.log(err));
