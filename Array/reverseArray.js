// TODO: Given an array, the task is to reverse

/*
* Example: 
*   Input: arr[] = {1, 2, 3}
*   Output: arr[] = {3, 2, 1}
*
*   Input: arr[] = {a, b, c, d}
*   Output: arr[] = {d, c, b, a}
 */

var arr = [1, 2, 3];

const printArray = (arr) => {
    for (let i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
    }
};

const reverseArray = (arr) => {
    for (let i = arr.length; i >= 0; i--) {
        console.log(arr[i]);
    }
};

printArray(arr);
reverseArray(arr);