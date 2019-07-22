let intervals = [[2,6],[1,3],[8,10],[15,18]];

let merge = function(intervals) {
    let row = intervals.length;
    if (row < 2) {
        return intervals
    }
    intervals.sort((a, b) => a[0]-b[0]);
    let result = [];
    result.push(intervals[0]);

    for (let i = 1; i < row; i++) {
        let last = result[result.length-1],
            current = intervals[i];
        if (current[0] > last[1]) {
            result.push(current)
        } else {
            result.pop();
            result.push([last[0], Math.max(last[1], current[1])])
        }
    }
    return result
};

console.log(merge(intervals));
