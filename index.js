// COUNT VOWELS
function countVowels(str) {
  const vowels = "aeiou";
  let counter = 0;

  for (let elem of str) {
    if (vowels.includes(elem)) {
      counter++;
    }
  }

  return counter;
}

console.log(countVowels("tangerine"))


//LARGER NUMBER 
function largerNum(a,b) {
    if(a > b) {
      return a;
    }
  
    else if (a == b) {
      return "Numbers are equal";
    }
  
    else {
      return b;
    }
  }
  
  console.log(largerNum(1,4));


//OPPOSITE NUMB
function opposite(num) {
  return -num;
}

console.log(opposite(-25));


//EVEN OR ODD 
function evenOrOdd(num) {
  if (num % 2 === 0) {
   return "Even";
  }

  else {
  return "Odd";
 }
}

evenOrOdd(4);

//Cleaner Solution
function evenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

evenOrOdd(5);


//GET THE MIDDLE LETTER
function getMiddle(str) {
  let mid = Math.floor(str.length / 2);

  if(str.length % 2 === 0) {
    let next = mid + 2;
    return str.slice(mid,next);
  }

  else {
    return str[mid];
  }
}

console.log(getMiddle("dog")); // o
console.log(getMiddle("test")); // es

//Get Middle - one line solution
function getMiddle(str) {
  return str.length % 2 === 0 ? str[str.length / 2 - 1] + str[str.length / 2] : str[Math.floor(str.length/2)]
}


//JADEN CASE
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function toJadenCase(str) {
  let words = str.split(" ");
  let result = [];
  for(let word of words) {
    result.push(capitalize(word));
  }
  return result.join(" "); 
}

toJadenCase("How can mirrors be real if our eyes aren't real")


//ACCUM FUNCTION
function cap(letter, num) {
  let result = [];
  for (let i = 0; i < num; i++) {
    result += i === 0 ? letter.toUpperCase() : letter.toLowerCase();
  }
  return result;
}

function accum(str) {
  let result = [];
  let letters = str.split("");
  let counter = 1;
  for (let letter of letters) {
    result.push(cap(letter, counter));
    counter++;
  }
  return result.join("-");
}

accum("abcd");

//FIND MAX AND FIND MIN
function findMax(nums) {
  let max = nums[0];
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] >= max) {
      max = nums[i];
    }
  }
  return max;
}

console.log(findMax([3, 4, 5, -23, -1, -54, 33, -22]));

function findMin(nums) {
  let min = nums[0];
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] <= max) {
      max = nums[i];
    }
  }
  return min;
}

console.log(findMin([3, 4, 5, -23, -1, -54, 33, -22]));

//SQUARE EVERY DIGIT
function sqrPow(num) {
  return Math.pow(num, 2);
}

function squareDigits(num) {
  let nums = num.toString().split("");
  let sqrNums = [];
  
  for (let i = 0; i < nums.length; i++) {
    sqrNums += Number(sqrPow(nums[i]));
  }

  return Number(sqrNums);
}

squareDigits(223);


//SAME X SAME O 
function XO(str) {
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x' ) {
      xCount++;
    }

    if (str[i].toLowerCase() === 'o' ) {
      oCount++;
    }  
  }

  if (xCount === 0 && oCount === 0) {
    return true;
  }

  else if (xCount === oCount) {
    return true;
  }

  else {
    return false;
  }
}


XO('ooxx')


//LIKES
function likes(names) {

  if (names == null) {
    return "No one likes this.";
  }

  else {
  let likes = names.split(",");
  
  switch(likes.length) {
    case 1:
      return `${likes} likes this.`; 
      break;
    case 2:
      return `${likes[0]} and ${likes[1]} like this.`;
      break;
    case 3:
      return `${likes[0]}, ${likes[1]} and ${likes[2]} like this.`;
      break;
    default:  
      return `${likes[0]}, ${likes[1]} and ${likes.length - 2} more like this.`;
      break;
    }
  }
}

likes("Marco,Vivian,Susan,Rosmery,Astrid");
