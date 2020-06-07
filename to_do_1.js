// Tobin Risser's To Do 1

//Push Front
//Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront(arr, value) {
    newArray = []
    newArray[0] = value;
    for (let i = 0; i < arr.length; i++) {
         newArray[i+1] = arr[i];
    }
    return newArray
}

// console.log(pushFront([1,3,5,7,8,9], 12))

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront(arr) {
    firstIdx = arr[0]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.pop()
    // console.log(arr);
    return firstIdx
}

// console.log(popFront([1,3,4,6,7,8,0,9]))

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, idx, value) {
    arr[arr.length] = value;
    for (let i = arr.length-1; i > idx; i--) {
        var temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
    }

    return arr
}
// console.log(insertAt([2,4,6,8,3,5,6,2,12], 3, 16))

// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0)

function removeAt(arr, idx) {
    removedIndex = arr[idx]
    for (let i = idx; i < arr.length; i++) {
        arr[i] = arr[i+1];
        // console.log(arr[i]);
    }
    arr.length--;
    console.log(arr);
    return removedIndex
}

// console.log(removeAt([1,3,6,7,8,19], 4))

// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr) {
    for (let i = 0; i < arr.length; i+=2) {
        if (arr[i+1] === undefined) {
            return arr
        }
        else {
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return arr
}

// console.log(swapPairs([1,2,3,4,5,6,7,8]))

// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

// Second: Solve this without using any nested loops.

function removeDup(arr) {
    var indx = 0;
    var count = 1;
    while (count < arr.length) {
        if (arr[indx] == arr[count]) {
            count++;
        }
        else {
            arr[indx+1] = arr[count];
            indx++;
            count++;
        }
    }
    for (var i=0; i<indx-1; i++) {
        arr.length--;
    }
    return arr
}

// console.log(removeDup([1,1,2,2,3,4,5,5,6,6,8,8,46,46]))