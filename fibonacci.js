const fibonacci = (arr, len) => {
    if (arr.length >= len) {
        return arr
    }
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    return fibonacci(arr, len);
}

console.log(fibonacci([0, 1], 15))