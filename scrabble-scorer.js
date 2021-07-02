// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

function runProgram(arrayOne) {
  let prompt = initialPrompt();
  //console.log(`\nUsing algorithm: ${scoringAlgorithms[prompt].name}`);
  var1 = '';
  while (var1 !== 'Stop') {
    let userInput = input.question(`\nEnter a word to be scored: `);
    console.log(`\nWord to score: ${userInput}`);
    if (userInput === 'Stop') {
      return
    } else {
      let varScore = arrayOne[prompt].scoreFunction(userInput);
      console.log("\nScore for " + userInput + ": " + varScore);
    }
  }
}

function transform(oldPointStructure) {
  let newPointStructure = {

  }
  for (item in oldPointStructure) {
    let var1 = oldPointStructure[item];
    for (i = 0; i < var1.length; i ++) {
      let lower = var1[i].toLowerCase();
      newPointStructure[lower] = Number(item);
    }
  }
  return newPointStructure;
}

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {

  let scorerPrompt = input.question(`\nWhich scoring algorithm would you like to use?\n\n0 - Simple : One point per character.\n1 - Vowel Bonus : Vowels are worth 3 pts.\n2 - Scrabble: Uses scrabble point system.\n\nEnter 0, 1, or 2: `);
  return scorerPrompt;
}

let simpleScore = {
  name: "SimpleScore",
  description: "Each letter is worth 1 point.",
  scoreFunction: function(word) {
    let points = word.length;
    return points;
  }
};

let vowelBonusScore = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoreFunction: function(word) {
      let upper = word.toLowerCase();
      let arrayOne = upper.split('');
      let vowelCount = 0;
      let consCount = 0;
      for (i = 0; i < arrayOne.length; i ++) {
        if (arrayOne[i] === 'a') {
        vowelCount +=3;
      } else if (arrayOne[i] === 'e') {
        vowelCount +=3;
      } else if(arrayOne[i] === 'i') {
        vowelCount +=3;
      } else if(arrayOne[i] === 'o') {
        vowelCount +=3;
      } else if(arrayOne[i] === 'u') {
        vowelCount +=3;
      } else {
        consCount +=1;
    }
  }
    let points = vowelCount + consCount;
    return points;
  }
};

let scrabbleScore = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoreFunction: function(word, obj) {
    let lower = word.toLowerCase();
    let arrayOne = lower.split('');
    let points = 0;
    for (i = 0; i < arrayOne.length; i ++) {
      let num = newPointStructure[arrayOne[i]];
      points += num;
      }
    return points;
  }
  };

let newPointStructure = transform(oldPointStructure);

/*function runProgram(arrayOne) {
  let prompt = initialPrompt();
  //console.log(`\nUsing algorithm: ${scoringAlgorithms[prompt].name}`);
  var1 = '';
  while (var1 !== 'Stop') {
    let userInput = input.question(`Enter a word to be scored: `);
    if (userInput === 'Stop') {
      return
    } else {
      let varScore = arrayOne[prompt].scoreFunction(userInput);
      console.log("Score for " + userInput + ": " + varScore);
    }
  }
}*/

scoringAlgorithms = [simpleScore,vowelBonusScore,scrabbleScore];

runProgram(scoringAlgorithms);
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

