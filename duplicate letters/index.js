//The goal of this exercise is to convert a string to 
//a new string where each character in the new string 
//is "(" if that character appears only once in the 
//original string, or ")" if that character appears more 
//than once in the original string. Ignore capitalization 
//when determining if a character is a duplicate.

//Examples"din"      =>  "((("
//"recede"   =>  "()()()"
//"Success"  =>  ")())())"



// function duplicateEncode(word){

//     const letters ={};

// for(let i in word){

//      const char = word[i];
//      if(!letters[char]){
//          letters[char] = 0
//      }
     

//      letters[char]++;
// }
// return letters;

// }
// console.log(duplicateEncode('recede'))


function duplicateEncode(word){

    let arr = [...word].map(letter =>
        word.match(new RegExp(letter, "ig")).length === 1 ? "(" : ")"
      ).join("");
      return arr;

}

console.log(duplicateEncode('Success'));