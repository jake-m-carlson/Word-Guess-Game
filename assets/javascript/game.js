var wins = 0;
document.getElementById("wins").innerHTML = document.getElementById("wins").innerHTML + " " + wins;

var losses = 0;
document.getElementById("losses").innerHTML = document.getElementById("losses").innerHTML + " " + losses;

var guessesRemaining = 9;
document.getElementById("guesses-remaining").innerHTML = document.getElementById("guesses-remaining").innerHTML + " " + guessesRemaining;

var words = ["baloo" , "simba" , "thumper" , "pegasus" , "flounder" , "rajah" , "winnie"];

var word = words[Math.floor(Math.random() * words.length)];
var underscoresArr = '_'.repeat(word.length).split("");
word = word.split("");
console.log(word); 
document.getElementById("word").innerHTML = underscoresArr.join(' ');

var alreadyGuessed = [];
document.getElementById("already-guessed").innerHTML = alreadyGuessed;


document.onkeyup = function (event) {
    
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if (letters.indexOf(event.key) > -1 ) {
        console.log(event.key);
        
        if (word.indexOf(event.key) > -1 ) {
            console.log(event.key);
            underscoresArr[word.indexOf(event.key)] = event.key;
            document.getElementById("word").innerHTML = underscoresArr.join(' ');
            // this is what i found online to try???.>>>> recursive 
            word.some(function(v,i,a){
                return a.lastIndexOf(v) !=i;
            });
        }
        else {
            alreadyGuessed.push(letters);
            guessesRemaining--;
        }
    }
}
// player hits one key to start the game
// a word is randomly chosen, _ _ _ _ appear on right div, guesses = 6,
// player hits actual key 
// if it is not a letter alert "please hit a letter"
// if letter = to letter in word replace _ with letter (((does there need to be an array for each word with letters????)))
// if letter is not in word, guesses left - 1, 
// if word is solved alert "yay you did it! click ok for a new word", change image to left with character image
// if guesses left=0, alert "oh no you failed! click ok for a new word"
