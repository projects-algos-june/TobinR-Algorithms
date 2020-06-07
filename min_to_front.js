//Tobin's Min to Front
// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.


function minToFront(arr) {
    var min = arr[0];
    var idx = undefined;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            idx = i;
        }
    }
    // console.log(min, idx)
    if (min == arr[0]) {
        return arr
    }
    for (let x = idx; x > 0; x--) {
        arr[x] = arr[x-1];
    }
    arr[0] = min;
    return arr

}

// console.log(minToFront([8,2,5,7,3,12]))