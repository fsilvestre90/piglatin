var translator = function(inputString) {
    var stringToChange = inputString;
    var consanant;
        if(isVowelRegEx(stringToChange.charAt(0)))
            return stringToChange.concat("ay");
        if(isConsanantRegEx(stringToChange.charAt(0)))
            consanant = stringToChange.charAt(0);
            stringToChange = stringToChange.substring(1);
            stringToChange = stringToChange.toString();
            return translator(stringToChange.concat(consanant));
};

var multipleTranslator = function(inputWord) {
    var stringArray = inputWord.split(" ");
    var result = "";
    for(var i = 0; i < stringArray.length; i++){
        if(i != stringArray.length-1)
            result = result.concat(translator(stringArray[i])," ");
        else
            result = result.concat(translator(stringArray[i]));
    }

    return result;
}

var isVowelRegEx = function(char)
{
  if (char.length == 1)
  {
    return /[aeiou]/.test(char);
  }
}


var isConsanantRegEx = function(char)
{
  if (char.length == 1)
  {
    return /[qwrtypsdfghjklzxcvbnm]/.test(char);
  }
}
