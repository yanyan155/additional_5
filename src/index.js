module.exports = function check(str, bracketsConfig) {

  if (str.length%2 != 0) {
    return false;
  }

  function findCloseBracket () {
    for (var number = 0; number<str.length; number++) {
      for (var i=0; i< bracketsConfig.length; i++) {
        if (str.charAt(number) === bracketsConfig[i][1] &&
            bracketsConfig[i][0] === bracketsConfig[i][1]) {

            var openNumber = number;
            for (var closeNumber = (openNumber + 1) ; closeNumber<str.length; closeNumber++) {
                if (str.charAt(closeNumber) === str.charAt(openNumber)) {
                  return [openNumber, bracketsConfig[i], closeNumber];
                }
            }
            return false;
        }
        if (str.charAt(number) === bracketsConfig[i][1]) {
          return [number, bracketsConfig[i], null];
        }
      }
    }
    return false;
  }

  function isCorrectClosingBracket (number, number2) {

    if (typeOfBrackets[0] === typeOfBrackets[1]) {
      if (number === number2 - 1) {
        return true;
      }
      if ((number - number2)%2 === 0) {
        return false;
      }
      var newStr = str.substring(number+1, number2);
      var c = check(newStr, bracketsConfig);
      if (c == true) {
        return true;
      } else {
        return false;
      }
    }
    if ( str.charAt(number - 1) === typeOfBrackets[0]) {
      return true;
    }
    return false;
  }

  var find = findCloseBracket(str);
  if (!findCloseBracket()) {
    return false;
  }
  var number = find[0];
  var typeOfBrackets =  find[1];
  var number2 = find[2];
  var Correct = isCorrectClosingBracket(number, number2);

  if (!(typeOfBrackets[0] === typeOfBrackets[1]) && number == 0) { 
    return false;
  }

  if (!Correct) {
    return false;
  } else if ((str.length == 2) && Correct){ 
    return true;
  } else if (str.length > 2){

    if (typeOfBrackets[0] === typeOfBrackets[1]) {
      str = str.substring(0, number) + str.substring(number2+1, str.length);
    } else {
      str = str.substring(0, number-1) + str.substring(number+1, str.length); 
    }

    if (str.length == 0) {
      return true;
    }
     
    var b = check(str, bracketsConfig);

    if (b == true) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}


