let arr= [5, 0, 12, 16, 8, 1, 11, 3, 19, 2, 6];

function mergeSort(arr) {
    if (arr.length <= 1 ) {
        return arr
    }
    let middle = parseInt(arr.length/2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    while (left.length > 0) {
        result.push(left.shift())
    }
    while (right.length > 0) {
        result.push(right.shift())
    }
    return result
}

console.log(mergeSort(arr));
