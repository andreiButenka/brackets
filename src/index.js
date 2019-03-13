module.exports = function check(str, bracketsConfig) {
  
  if (str.length <= 1) return false;

  let openingBrackets = [];
  let closingBrackets = [];
  let stack = []; 
  
  for (let i = 0; i < bracketsConfig.length; i++) { // create arrays of opening and closing brackets
    openingBrackets.push(bracketsConfig[i][0]);
    closingBrackets.push(bracketsConfig[i][1]);
  }
  
  for (let i = 0; i < str.length; i++) { // loop trought all symbols of str
    if (openingBrackets.includes(str[i])) { // check if it's opening bracket
      stack.push(str[i]) // correct --> push it into to the stack
      // special case: opening and closing bracket can be the same
      if ((stack[stack.length - 1] == '|' && stack[stack.length - 2] == '|')  || (stack[stack.length - 1] == '8' 
      && stack[stack.length - 2] == '8') || (stack[stack.length - 1] == '7' && stack[stack.length - 2] == '7')) {
        stack.pop();
        stack.pop();
      }
    } else if (closingBrackets.includes(str[i])) { // if it's closing bracket
        let openPair = openingBrackets[closingBrackets.indexOf(str[i])]; // find it's pair
        if (stack[stack.length - 1] === openPair) { // check if that pair is last element in array
          stack.pop(); // correct --> remove it from the stack
        } else { // if it's not
          stack.push(str[i]); // push it into to the stack
          break // exit loop
        }
      }
  }

  return stack.length == 0;

}