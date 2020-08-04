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