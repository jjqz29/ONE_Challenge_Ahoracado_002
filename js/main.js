let scrStart = document.querySelector("#start-screen");
let scrGame = document.querySelector("#game-screen");
let scrAddWord = document.querySelector("#add-word-screen");
let btnStartGame = document.querySelector("#start-game");
let btnAddWordGame = document.querySelector("#add-word-game");
let btnRestartGame = document.querySelector("#restart-game");
let btnAddWord = document.querySelector("#add-word");
let inputAddWord = document.querySelector("#input-add-word");

let secretsWords = ['ALURA', 'ORACLE', 'PROGRAMADOR', 'CANVAS', 'JAVASCRIPT', 'CSS', 'HTML', 'PERRO', 'GATO', 'ESTATUA', 'ARGENTINA', 'BRASIL', 'COLOMBIA', 'ECUADOR', 'PERU', 'BOLIVIA', 'PARAGUAY', 'URUGUAY', 'MEXICO', 'PANAMA'];
const POSIBILITIES = 8;
let round = 0;
let secretWord;
let letterPositions = [];
let lettersCheck = [];
let wrongLetters = [];
let isGameFinished = false;

//Event click button Reset
btnRestartGame.addEventListener("click", () =>{
    location.reload();
});

//Event click button. Validate input newWord
btnAddWordGame.addEventListener("click", () => {
    scrStart.classList.add('hidden');
    scrGame.classList.add('hidden');
    scrAddWord.classList.remove('hidden');
    inputAddWord.value = "";
    //spanErrorMsg.classList.remove("error");

});

//Event click button. Validate input newWord
btnAddWord.addEventListener("click", () => {
    //spanErrorMsg.classList.remove("error");
    let addWord = inputAddWord.value.toUpperCase();;
    let reg = /^[A-Z]+$/;

    if(!addWord.match(reg)){
        //spanErrorMsg.classList.add("error");
        return;
    }
    secretsWords.push(addWord);
    inputAddWord.value = "";
    scrStart.classList.remove('hidden');
    scrGame.classList.add('hidden');
    scrAddWord.classList.add('hidden');
});

btnStartGame.addEventListener("click", () => {
    startGame();
});

//Function to start game
function startGame(selectedWord = null){
    scrStart.classList.add('hidden');
    scrGame.classList.remove('hidden');
    scrAddWord.classList.add('hidden');
    isGameFinished = false;
    resetGame();
    clearCanvas();
    createBaseCanvas();
    secretWord = selectedWord ?? chooseRandomWord();
    console.log(secretWord);
    createLinesWord(secretWord);
    document.addEventListener("keyup", detectKeyPress); 
}

//Function to reset variables
function resetGame(){
    round = 0;
    secretWord = [];
    letterPositions = [];
    lettersCheck = [];
    wrongLetters = [];
    //inputNewWord.value = "";
    //spanErrorMsg.classList.remove("error"); 
    //--btnRestartGame.classList.add("hidden");
    isGameFinished = false;
    //CanvasCnv.classList.add("Canvas-visible");
}

//Function to select secret word from array of secretsWords
function chooseRandomWord(){
    let randomIndex = generateRandomNumber(secretsWords.length);
    return secretsWords[randomIndex].split("");
}

//Function to generate random number
function generateRandomNumber(maxArray){
    return Math.floor(Math.random() * maxArray);
}

//Detect function to detectKeyPress
function detectKeyPress(e){  
    if(!validateKey(e.keyCode)){
        return;
    }
    let letterOk = e.key.toUpperCase();
    
    if(isLetterInArray(letterOk, lettersCheck) || isLetterInArray(letterOk, wrongLetters)){
        return;
    }
    let stateFlag = isLetterInSecretWord(letterOk);
    if(!stateFlag){
        wrongChoose(letterOk);
        showWrongLetter(letterOk);
        drawCanvasPart(round);
        checkLoose();
        return;
    } 
    showHitLetter(letterOk, letterPositions);
    checkWin();
}

//Function to detect if key is a letter with keyCode
function validateKey(letterCode){
    if(letterCode >= 65 && letterCode <= 90 || letterCode == 186){
        return true;
    }
}

//Function to validate if letter is in array
function isLetterInArray(letter, array){
    if(array.indexOf(letter) == -1){
        return false;
    }
        return true;
}

//Function to check if the letter is in the secret word.
//In case the letter is in the secret word.
//Save the letter and the position in the array.
function isLetterInSecretWord(letter){
    let flag = false;
    letterPositions = [];
    secretWord.forEach((element, index) => {
        if(element == letter){
            flag = true;
            lettersCheck.push(element);
            letterPositions.push(index);  
        }    
    });
    return flag;
} 

//Function to increment the round and save the wrong letter.
function wrongChoose(letter){
    round++;
    wrongLetters.push(letter);
}

//Function to check that the user has lost.
function checkLoose(){
    if(round > POSIBILITIES){
        isGameFinished = true;
        showLooseMessage(secretWord);
        removeKeyUpListener();
        showBtnReset();
    }
}

//Function to check that the user has won.
function checkWin(){
    if(lettersCheck.length == secretWord.length){
        isGameFinished = true;
        showWinMessage();
        removeKeyUpListener();
        //--showBtnReset();
    }
}

//Function to remove listener for keyup event.
function removeKeyUpListener(){
    document.removeEventListener('keyup', detectKeyPress);
}

//Function to show reset button when the game is finished
/*function showBtnReset(){
    btnRestartGame.classList.remove("hidden");
}*/
