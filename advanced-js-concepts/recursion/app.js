// function factorial(num) {
//     total = 1;
    
//     for(let i = 1; i <= num; i++) {
//         total *= i;
//     }

//     return total;
// }


// function factorial(num) {
//     if(num === 1) return 1; //base case. Where does the function stop?
//     return num * factorial(num - 1); //recursive call. Calling itself
// }

// // 5 * factorial(4)
// //     4 * factorial(3)
// //         3 * factorial(2)
// //             2 * factorial(1)
// //                 1


// console.log(factorial(5));


//Example 2
//Summing all the numbers in an array

// function sumList(arr) {
//     if(arr.length === 0 ) return 0;
//     return arr[0] + sumList(arr.slice(1));
// }

// // 1 + sumList[2, 3, 4]
// //      2 + sumList[3, 4]
// //          3 + sumList[3, 4]
// //              4 + sumList[]
// //                  sumList[] === 0

// console.log(sumList([1, 2, 3, 4]));


// function addDigits(num) {
//     if(num < 10) return num;
//     return num % 10 + addDigits(Math.floor(num / 10));
// }



// //  3 + addDigits(Math.floor(942))
// //       2 + addDigits(Math.floor(94))
// //           4 + addDigits(Math.floor(9))
// //              9

// console.log(addDigits(9423))


//Final Example

function countDown(count) {
    console.log(count);

    let id = setTimeout(() => {
        if(count === 0) {
            clearTimeout(id);
        }
        else {
            countDown(count - 1);
        }
    }, 10);
}


countDown(100);