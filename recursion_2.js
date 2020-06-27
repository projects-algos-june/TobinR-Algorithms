// Tobin Risser's Recursion To Do 2

//To Do 3
// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 

// rBinarySearch([1,3,5,6],4) = false; 

// rBinarySearch([4,5,6,8,12],5) = true.

let sortedArray = [1,3,5,6,8,11,14,16,19,22];

function rBinarySearch(arr, target){
    // base case
    if (arr.length === 0) return false;

    // Perameters
    let middleIndex = Math.floor(arr.length / 2);
    let left = arr.slice(0, middleIndex);
    let right = arr.slice(middleIndex + 1);

    // Recursion
    if (target < arr[middleIndex]){
       return rBinarySearch(left, target);
    } else if (target > arr[middleIndex]) {
        return rBinarySearch(right, target);
    } else {
        return true;
    }
}

// console.log(rBinarySearch(sortedArray, 5));
// console.log(rBinarySearch(sortedArray, 4));


// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).

function gcf(num1, num2){
    if (num1 == num2) return num1;
    if (num1 > num2){
        return gcf(num1-num2, num2);
    }
    if (num1 < num2){
        return gcf(num1, num2-num1);
    }
}

console.log(gcf(14,21));

function rGCF(num1, num2){
    if (num1 == num2){
        return num1;
    }
    if(num1 > num2){
        if((num1/num2) % 1 === 0){
            return num2;
        } else {
            return rGCF(num1-num2, num2);
        }
    }
    if(num1 < num2){
        if((num1/num2)%1 === 0){
            return num2;
        } else {
            return rGCF(num1, num2-num1);
        }
    }
}

console.log(rGCF(123456, 987654));