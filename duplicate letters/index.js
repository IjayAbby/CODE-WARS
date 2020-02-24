//The goal of this exercise is to convert a string to 
//a new string where each character in the new string 
//is "(" if that character appears only once in the 
//original string, or ")" if that character appears more 
//than once in the original string. Ignore capitalization 
//when determining if a character is a duplicate.

//Examples"din"      =>  "((("
//"recede"   =>  "()()()"
//"Success"  =>  ")())())"

 function duplicateEncode(word){
   var string = "";
   var lowerCase = word.toLowerCase();
   for (var i = 0;i < lowerCase.length;i++){
     if (lowerCase.indexOf(lowerCase[i]) === lowerCase.lastIndexOf(lowerCase[i])){
       string += "(";
     }else {
       string += ")";
     }
   }
   return string;
 }
 console.log(duplicateEncode("Success"));

