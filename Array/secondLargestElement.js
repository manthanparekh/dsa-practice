// TODO: Given an array of integers, task is to write a program that efficiently finds the seconds-largest element present in the array

/* 
* Example:
*   Input: arr[] = {12, 35, 1, 10, 34, 1}
*   Output: The second largest element is 34
*
*   Input: arr[] = {10, 5, 10}
*   Output: The second largest element is 5
*
*   Input: arr[] = {5, 5, 5}
*   Output: The second largest DNE
*/

// TODO: create a function to sort an array
/* 
const sortArray = (arr) = {

}
*/

const arr = [10, 7, 3, 12, 2, 14, 20, 5];

const secondLargestElement = (arr) => {
    if (arr.length < 2) {
        console.log("The seconds largest element DNE due to Array size not large enough");
    }

    arr.sort();

    for (let i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
    }
    
    console.log(arr[arr.length - 1]);
}


secondLargestElement(arr);