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