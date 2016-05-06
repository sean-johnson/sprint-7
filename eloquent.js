// min function

function giveMin(a, b) {
  
  if (a < b) {
    return a;
  } else {
    return b;
  }
  
}

giveMin(11, 15);

// isEven function

function isEven(n){
  var x = n % 2;
  
  if (n == 0) {
    return true;
  } else if (x == 0) {
    return true;
  } else {
    return false;
  }
}
  

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//

function countBs(str) {
  // iterate through the string
  // turn the string into array of characters
  // if array index is equal to "B", add to the counter
  // return counter
  var counter = 0;
  
  for (var i = 0; i < str.length; i++) {
    var arr = Array.from(str)    
    if (arr[i] == "B") {
    counter = counter + 1;
    }
  }
  
  return counter;
}

function countChar(str, char) {
  // turn the string into array of characters and iterate through the string
  // if array index is equal to char, add to the counter
  // return counter
  var counter = 0;
  
  for (var i = 0; i < str.length; i++) {
    var arr = Array.from(str)    
    if (arr[i] == char) {
    counter = counter + 1;
    }
  }
  
  return counter;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4