//Exercises

//Looping a triangle
// for(let i = 1; i < 8; i++) console.log('#'.repeat(i))

//FizzBuzz
//My solution
// for(let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log('FizzBuzz')
//     }
  
//     else if (i % 3 == 0) {
//       console.log('Fizz')
//     }
  
//     else if (i % 5 == 0) {
//       console.log('Buzz')
//     }
    
//     else {
//       console.log(i);
//     }
//   }

//Author's solution
// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
//   }


//Chess Board
//My initial code

// let size = 8;
// for(let i = 1; i <= size; i++) {
//   i % 2 == 0 ? console.log('# '.repeat(4)) : console.log(' #'.repeat(4));
// }

//More readeable 
let size = 8;
for(let i = 1; i <= size;  i++) {
  board = '';
  i % 2 == 0 ? board += '# ' : board += ' #'
  console.log(board.repeat(4))
}