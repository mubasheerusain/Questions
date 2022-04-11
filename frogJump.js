const frogJump = (x, y, D) => {
    let res = Math.floor((y - x) / D);
    if ((x + D) * res >= y) {
        return res
    }
    return res + 1;
}

console.log(frogJump(30, 120, 20))