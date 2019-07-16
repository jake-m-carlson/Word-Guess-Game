console.log("hello");

var words = ["baloo" , "simba" , "thumper" , "pegasus" , "flounder" , "rajah" , "winnie"];

// for (var i=0; i < words.length; i++) {
//     // console.log(words[i]); ----- works!
// }
document.onkeyup = function (event) {
    //alert("working!"); --- onkeyup funciton working!
    
    var word = words[Math.floor(Math.random() * words.length)];
    var answerArray [];
    
    for (var i=0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    var remainingLetters = word.length;

    // var userGuess = event.key;
    // var computerGuess = words[Math.floor(Math.random() * words.length)];
   
    // console.log(computerGuess); ----- word is generated in console!
   
   // lightbulb came up and said to extract to global scope??
   // var answerArray = [];
    // for (var i=0; i < words.length; i++) {
    //     answerArray[i] = "_";
    // }
}

// **** not sure if i need these two lines
// var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// for (var i=0; i < letters.length; i++) {
   
   
   
   
    // console.log(letters[i]); ------- works!

// player hits one key to start the game
// a word is randomly chosen, _ _ _ _ appear on right div, guesses = 6,
// player hits actual key 
// if it is not a letter alert "please hit a letter"
// if letter = to letter in word replace _ with letter (((does there need to be an array for each word with letters????)))
// if letter is not in word, guesses left - 1, 
// if word is solved alert "yay you did it! click ok for a new word", change image to left with character image
// if guesses left=0, alert "oh no you failed! click ok for a new word"
