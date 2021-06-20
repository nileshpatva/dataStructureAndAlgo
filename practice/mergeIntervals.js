

function mergeIntervals(intervals) {
  let merged = [];
    intervals.sort((a, b) => a[0] - b[0]);
    let temp = intervals[0];
    
    for (let it of intervals) {
        if(it[0] <= temp[1]) {
            temp[1] = Math.max(it[1], temp[1]);
        } else {
            merged.push(temp);
            temp = it;
        }
    }
    merged.push(temp);
    return merged;
}

console.log(mergeIntervals([[1,3], [2,4], [5,7], [8,9], [10,11]]))