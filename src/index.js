module.exports = function check(str, bracketsConfig) {

  function findCloseBracket (str, i) {
    var sameBracketsSymbolAndCount = []; 
    if(i !=0) {
      i--;
    }
    for (i; i<str.length; i++) {
      var symbol = str.charAt(i);
      var isFind = bracketsConfig.some(elem => elem[1] == symbol); 
      var isSame = bracketsConfig.some(elem => elem[0] == symbol);
      if(isFind && !isSame) {
        var newString = str.slice(0, i+1);
        return newString;
      } else if(isFind && isSame) {
        var find = sameBracketsSymbolAndCount.find(elem => elem[0] === symbol);
        if(find != undefined) {
          var count = find[1];
          if(count === 1) {
             var findIndex = sameBracketsSymbolAndCount.findIndex(elem => elem[0] === symbol);
             sameBracketsSymbolAndCount[findIndex][1]++;
             var newString = str.slice(0, i+1);
             return newString;
          }
        }else if(find === undefined) {
          sameBracketsSymbolAndCount.push([symbol, 1]);
        }
      }
    } return str;
  }

  function isCorrectStr (string) {
    var lastSymbol = string.charAt(string.length-1);
    var prevSymbol = string.charAt(string.length-2);
    var bracketsIndex = bracketsConfig.find(elem => elem[1] === lastSymbol);
    if (bracketsIndex[0] === prevSymbol && bracketsIndex[1] === lastSymbol) {
      return true;
    }
    return false;
  }

  function newCheckingStr (correctstring) {
    var length = correctstring.length;
    var cuttingStr = correctstring.slice(0, -2);
    var newStr = cuttingStr + str.slice(length);
    index = length-2;
    return newStr;
  }
  if (str.length%2 != 0) {
    return false;
  }
  var str = str;
  var index = 0;

  while(str != "") {
    var getstr = findCloseBracket(str, index);
    var isCorrect = isCorrectStr(getstr);
    if(isCorrect) {
      str = newCheckingStr(getstr);
      if(str === "") {
        break;
      }
    } else {
      return false;
    }
  }
  return true;
}


