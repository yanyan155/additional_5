module.exports = function check(str, bracketsConfig) {


  if (str.length%2 != 0) {
    return false;
  }

  let stack = [];
  for (let j = 0; j <str.length; j++) {

    let symbol = str.charAt(j);
    for(let i = 0; i< bracketsConfig.length; i++) {

      let item = bracketsConfig[i];
      if(symbol === item[0] && symbol === item[1]) {
        if(stack.length > 0 && stack[stack.length - 1][0] === i) {
          stack.pop();
          break;
        }
        stack.push([i, 0]);
        break;
        
      } 

      if(symbol === item[0]) {
        stack.push([i, 0]);
        break;
      } else if(symbol === item[1]) {

        let openBracket = stack[stack.length - 1];
        if(stack.length > 0 && openBracket[0] === i) {

            stack.pop();
            break;
        } 
          return false;
      }
    }
  }
  if(stack.length === 0) {
    return true;
  }
  return false;
}


