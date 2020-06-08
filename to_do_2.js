// Tobin Risser's To Do 2

// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverse(numArr) {
    halfArr = numArr.length/2;
    for (let i = 0; i < halfArr; i++) {
        var swapIdx = numArr[numArr.length-1-i];
        numArr[numArr.length-1-i] = numArr[i];
        numArr[i] = swapIdx;
    }
    return numArr
}

// console.log(reverse([1,2,3,4,5,6,7,8,9]))


// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.

// Second: allow negative shiftBy (shift L, not R).

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

// Fourth: minimize the touches of each element.

function rotateArr(arr, shiftBy) {
    // Positive shift (right)
    if (shiftBy > 0) {
        var iterations = shiftBy;
        while (iterations > 0) {
            var temp = arr[arr.length-1]
            for (let i=arr.length-1; i>0; i--) {
                arr[i] = arr[i-1];
            }
            arr[0] = temp
            iterations--;
        }
        return arr
    } 
    // Negative shift (left)
    else if (shiftBy < 0) {
        var iterations = shiftBy;
        // console.log(iterations)
        while (iterations < 0) {
            var temp = arr[0];
            for (let i=0; i<arr.length; i++) {
                arr[i] = arr[i+1];
            }
            arr[arr.length-1] = temp;
            iterations++;
        }
        return arr
    } 
    // No shift
    else {
        return arr
    }
} 

// console.log(rotateArr([1,2,3,4,5,6,7], 1))

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange(arr, min, max) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < min || arr[i] > max) {
            for (let x=i; x<arr.length-1; x++) {
                arr[x] = arr[x+1];
                // console.log(arr[x]);
            }
            arr.length--;
            i--;
        }        
    }
    return arr
}

// console.log(filterRange([1,2,3,4,5], 3,4))

// Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function concat(arr1, arr2) {
    var newArr = [];
    for (var i=0; i<arr1.length; i++) {
        newArr[newArr.length] = arr1[i];
    }
    for (var x=0; x<arr2.length; x++) {
        newArr[newArr.length] = arr2[x];
    }
    return newArr
}

// console.log(concat([1,2,"time"], ["travel",2,9,4]))