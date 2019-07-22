let arr = [7, 11, 4, 8, 1, 6, 15, 9, 0, 10];

console.log(quickSort(arr));

function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    sort(arr, 0, arr.length-1)
    return arr
}

function sort(arr, l, r) {
    if (r <= l) {
        return
    }
    let low = l,
        high = r,
        key = arr[l];
    while (low < high) {
        while (low < high && arr[high] > key) {
            high--
        }
        arr[low] = arr[high];
        while (low < high && arr[low] < key) {
            low++
        }
        arr[high] = arr[low];
    }
    arr[low] = key;
    sort(arr, l, low-1);
    sort(arr, low+1, r)
}