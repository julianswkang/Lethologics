const allowedLetter = new Set(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']);
let playersGuess = '';
const dictionary = [
  "earth",
  "which",
  "there",
  "their",
  "about",
  "would",
  "these",
  "other",
  "words",
  "could",
  "write",
  "first",
  "water",
  "after",
  "where",
  "right",
  "think",
  "three",
  "years",
  "place",
  "sound",
  "great",
  "again",
  "still",
  "every",
  "small",
  "found",
  "those",
  "never",
  "under",
  "might",
  "while",
  "house",
  "world",
  "below",
  "asked",
  "going",
  "large",
  "until",
  "along",
  "shall",
  "being",
  "often",
  "earth",
  "began",
  "since",
  "study",
  "night",
  "light",
  "above",
  "paper",
  "parts",
  "young",
  "story",
  "point",
  "times",
  "heard",
  "whole",
  "white",
  "given",
  "means",
  "music",
  "miles",
  "thing",
  "today",
  "later",
  "using",
  "money",
  "lines",
  "order",
  "group",
  "among",
  "learn",
  "known",
  "space",
  "table",
  "early",
  "trees",
  "short",
  "hands",
  "state",
  "black",
  "shown",
  "stood",
  "front",
  "voice",
  "kinds",
  "makes",
  "comes",
  "close",
  "power",
  "lived",
  "vowel",
  "taken",
  "built",
  "heart",
  "ready",
  "quite",
  "class",
  "bring",
  "round",
  "horse",
  "shows",
  "piece",
  "green",
  "stand",
  "birds",
  "start",
  "river",
  "tried",
  "least",
  "field",
  "whose",
  "girls",
  "leave",
  "added",
  "color",
  "third",
  "hours",
  "moved",
  "plant",
  "doing",
  "names",
  "forms",
  "heavy",
  "ideas",
  "cried",
  "check",
  "floor",
  "begin",
  "woman",
  "alone",
  "plane",
  "spell",
  "watch",
  "carry",
  "wrote",
  "clear",
  "named",
  "books",
  "child",
  "glass",
  "human",
  "takes",
  "party",
  "build",
  "seems",
  "blood",
  "sides",
  "seven",
  "mouth",
  "solve",
  "north",
  "value",
  "death",
  "maybe",
  "happy",
  "tells",
  "gives",
  "looks",
  "shape",
  "lives",
  "steps",
  "areas",
  "sense",
  "speak",
  "force",
  "ocean",
  "speed",
  "women",
  "metal",
  "south",
  "grass",
  "scale",
  "cells",
  "lower",
  "sleep",
  "wrong",
  "pages",
  "ships",
  "needs",
  "rocks",
  "eight",
  "major",
  "level",
  "total",
  "ahead",
  "reach",
  "stars",
  "store",
  "sight",
  "terms",
  "catch",
  "works",
  "board",
  "cover",
  "songs",
  "equal",
  "stone",
  "waves",
  "guess",
  "dance",
  "spoke",
  "break",
  "cause",
  "radio",
  "weeks",
  "lands",
  "basic",
  "liked",
  "trade",
  "fresh",
  "final",
  "fight",
  "meant",
  "drive",
  "spent",
  "local",
  "waxes",
  "knows",
  "train",
  "bread",
  "homes",
  "teeth",
  "coast",
  "thick",
  "brown",
  "clean",
  "quiet",
  "sugar",
  "facts",
  "steel",
  "forth",
  "rules",
  "notes",
  "units",
  "peace",
  "month",
  "verbs",
  "seeds",
  "helps",
  "sharp",
  "visit",
  "woods",
  "chief",
  "walls",
  "cross",
  "wings",
  "grown",
  "cases",
  "foods",
  "crops",
  "fruit",
  "stick",
  "wants",
  "stage",
  "sheep",
  "nouns",
  "plain",
  "drink",
  "bones",
  "apart",
  "turns",
  "moves",
  "touch",
  "angle",
  "based",
  "range",
  "marks",
  "tired",
  "older",
  "farms",
  "spend",
  "shoes",
  "goods",
  "chair",
  "twice",
  "cents",
  "empty",
  "alike",
  "style",
  "broke",
  "pairs",
  "count",
  "enjoy",
  "score",
  "shore",
  "roots",
  "paint",
  "heads",
  "shook",
  "serve",
  "angry",
  "crowd",
  "wheel",
  "quick",
  "dress",
  "share",
  "alive",
  "noise",
  "solid",
  "cloth",
  "signs",
  "hills",
  "types",
  "drawn",
  "worth",
  "truck",
  "piano",
  "upper",
  "loved",
  "usual",
  "faces",
  "drove",
  "cabin",
  "boats",
  "towns",
  "proud",
  "court",
  "model",
  "prime",
  "fifty",
  "plans",
  "yards",
  "prove",
  "tools",
  "price",
  "sheet",
  "smell",
  "boxes",
  "raise",
  "match",
  "truth",
  "roads",
  "threw",
  "enemy",
  "lunch",
  "chart",
  "scene",
  "graph",
  "doubt",
  "guide",
  "winds",
  "block",
  "grain",
  "smoke",
  "mixed",
  "games",
  "wagon",
  "sweet",
  "topic",
  "extra",
  "plate",
  "title",
  "knife",
  "fence",
  "falls",
  "cloud",
  "wheat",
  "plays",
  "enter",
  "broad",
  "steam",
  "atoms",
  "press",
  "lying",
  "basis",
  "clock",
  "taste",
  "grows",
  "thank",
  "storm",
  "agree",
  "brain",
  "track",
  "smile",
  "funny",
  "beach",
  "stock",
  "hurry",
  "saved",
  "sorry",
  "giant",
  "trail",
  "offer",
  "ought",
  "rough",
  "daily",
  "avoid",
  "keeps",
  "throw",
  "allow",
  "cream",
  "laugh",
  "edges",
  "teach",
  "frame",
  "bells",
  "dream",
  "magic",
]
let answer = randomWord();
let letterCount = createLetterCount(answer);
console.log(letterCount);
let gameEnded = false;

document.addEventListener('DOMContentLoaded', ()=>{

  
  // console.log('event listener:', answer)
  document.addEventListener('keydown', (e) => {
    keyPressed(e.key);
  })

  
  
})
/* -- FUNCTION THAT IS CALLED WHEN A KEY PRESS IS TRIGGERED */
function keyPressed (keystroke) {
  // console.log(playersGuess.length);
  if(keystroke === 'Enter' && playersGuess.length === 5 && !gameEnded){
    //run code to check the players guess with the wordle word thing
    //remove currentrow class from the current row, and add it to the next row
    submitGuess(playersGuess)
  }
  else if(keystroke === 'Backspace' && playersGuess.length > 0) {
    playersGuess = playersGuess.slice(0,-1);
    console.log(playersGuess);
    updateTiles('deletion');
  }
  else if(allowedLetter.has(keystroke.toLowerCase()) && playersGuess.length < 5) {
    playersGuess += keystroke;
    console.log(playersGuess);
    updateTiles('addition', keystroke.toUpperCase());
  }
  console.log(playersGuess.length);

}

/* -- FUNCTION TO UPDATE THE TILES IN THE HTML TILES BASED ON THE KEY */

function updateTiles(updateType, key) {
  const currentRow = document.querySelector('.row.current-row');
  const tiles = currentRow.children;

  if (updateType === 'addition') {
    tiles[playersGuess.length - 1].textContent = key;
  }
  if (updateType === 'deletion') {
    if (playersGuess.length === 0) {
      tiles[playersGuess.length].textContent = "";
    }
    else tiles[playersGuess.length].textContent = "";
  }

}
/* -- FUNCTION TO SUBMIT THE USER'S GUESS, WILL CHECK EACH LETTER WITH THE CHOSEN WORD
      AND WILL ASSIGN DIFFERENT COLORS TO THE TILES BASED ON CORRECTNESS -- */

//creating shallow clone to mutate for each guess
const countClone = Object.assign({},letterCount);

function submitGuess (guess) {
  const currentRow = document.querySelector('.row.current-row');
  const tiles = currentRow.children; 
  //const nextRow = currentRow.nextElementSibling;
  //const nextRow = currentRow.nextElementSibling ? currentRow.nextElementSibling.getAttribute('id') !== 'game-message' ? currentRow.nextElementSibling : undefined;
  let nextRow;
  if (currentRow.nextElementSibling && currentRow.nextElementSibling.getAttribute('id') !== 'game-message') nextRow = currentRow.nextElementSibling;
  else nextRow = undefined;
  // console.log('guess func:', answer)
  console.log(countClone);
  for (let i = 0; i < 5; i++) {
    if (guess[i] === answer[i]) {
      tiles[i].setAttribute('class', 'tile correct');
      countClone[guess[i]]--;
    } 
  }

  for (let i = 0; i < 5; i++) {
    // if (guess[i] === answer[i]) {
    //   tiles[i].setAttribute('class', 'tile correct');
    //   countClone[guess[i]]--;
    // } 
    // else 
    if (countClone[guess[i]] > 0) {
      tiles[i].setAttribute('class', 'tile almost-correct');
      countClone[guess[i]]--;
    } else if (guess[i] !== answer[i] ){
      tiles[i].setAttribute('class', 'tile incorrect');
    }
  }
  
  //console.log(countClone);
  if (nextRow != undefined){
    playersGuess = '';
    nextRow.setAttribute('class', 'row current-row');
    currentRow.setAttribute('class', 'row');
  }
  
  if (answer === guess) {
    console.log("you win")
    gameEnded = true;
  }

  if (!nextRow && answer !== guess){
    // document.querySelector('game-message')
    gameEnded = true;
    console.log("Grab a dictionary, son! The word was: " + answer);
  }
}
/* -- FUNCTION TO CHOOSE A WORD FROM THE ARRAY OF WORDS -- */
function randomWord(){
  return dictionary[Math.floor(Math.random() * (dictionary.length -1))];
}

/* -- CREATING A MAP OF THE LETTERS AND CORRESPONDING FREQUENCY OF OCCURENCE IN THE CHOSEN WORD -- */
function createLetterCount(ans) {
  const obj = {};
  for(var i=0; i < 5; i++) {
    obj[ans[i]] = obj[ans[i]] + 1 || 1
  }
  return obj;
}
