 /*Given four lists A, B, C, D of integer values,
 compute how many tuples (i, j, k, l)
 there are such that A[i] + B[j] + C[k] + D[l] is zero.*/

let A = [ 1, 2],
    B = [-2,-1],
    C = [-1, 2],
    D = [ 0, 2];

const fourSumCount = function(A, B, C, D) {
    let sum = {},
        result = 0;
    for(let i of A){
        for(let j of B){
            sum[i+j] = (sum[i+j] || 0) + 1
        }
    }

    for(let i of C){
        for(let j of D){
                result += (sum[-(i+j)] || 0);
        }
    }

    return result
};

 console.log(fourSumCount(A, B, C, D));
