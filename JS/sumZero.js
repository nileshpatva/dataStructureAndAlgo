function findSumZero(arr) {
    let first = 0, last = arr.length - 1;
    const res = [];
    while(first < last) {
        const sum = arr[first] + arr[last];
        if (sum === 0) {
            res.push([arr[first], arr[last]]);
            first++;
            last--;
        } else if (sum < 0) {
            first++;
        } else {
            last--;
        }
    }
    return res;
}

console.log(findSumZero([-3,-2,-1,0,1,2,3]))