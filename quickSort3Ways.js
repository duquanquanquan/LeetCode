let arr = [2,0,2,1,1,0,1,1,0,2];

let quickSort3Ways = function (arr) {
    if (arr.length < 2) {
        return arr
    }
    sort(arr, 0, arr.length-1);
    return arr
};

function sort(arr, l, r) {
    if (r <= l) {
        return
    }
    let key = arr[l],
        i = l+1,
        low = l,
        high = r;
    while (i <= high) {
        if (arr[i] === key) {
            i++
        } else if (arr[i] < key) {
            low++;
            swap(arr, i, low);
            i++;
        } else {
            swap(arr, i, high);
            high--
        }
    }
    swap(arr, l, low);
    sort(arr, l, low-1);
    sort(arr, high+1, r);
}

function swap(arr, l1, l2) {
    if (l1 === l2) {
        return
    }
    let temp = arr[l1];
    arr[l1] = arr[l2];
    arr[l2] = temp;
}

console.log(quickSort3Ways(arr));
