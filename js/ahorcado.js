var canvas = document.getElementById("ahorcado");
let brush = canvas.getContext("2d");

let xInicialWrongLetter = 5;
let yInicialWrongLetter = 130;
let indexWrongLetter = 0;

let latterSize = 20;
let spaceSize = 10;
let canvasCenter = canvas.width / 2;
let letterCenter = 0;

brush.lineWidth=2;
brush.fillStyle="black";
brush.font="bold 10px arial";
brush.strokeStyle ="black";

//Function to create base of canvas
function createBaseCanvas(){
brush.fillStyle='black';
brush.beginPath();
brush.moveTo(100, 80);
brush.lineTo(50, 100);
brush.lineTo(150, 100);
brush.lineTo(100, 80);

brush.fill();
}

//Function to create lines of the letters of the secret word
function createLinesWord(word){
    letterCenter = ((word.length * latterSize) + ((word.length - 1) * spaceSize)) / 2;
    let xInicial = canvasCenter - letterCenter;
    let yInicial = 115;

    for(let i=0; i < word.length; i++){
        brush.moveTo(xInicial, yInicial); 
        brush.lineTo(xInicial + 20, yInicial);
        brush.stroke();
        xInicial += (latterSize + spaceSize);
    }
}

//Function to clear Canvas
function clearCanvas(){
    indexWrongLetter = 0;
    brush.clearRect(0,0,canvas.width,canvas.height);
    canvas.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      });
}

//Function to display the correct letter on the screen
function showHitLetter(letter, arrPositions){
    let yInicial = 112;
    arrPositions.forEach((position) => {
        let xInicial = canvasCenter - letterCenter + 6;
        
        xInicial += (30 * position);
        brush.fillText(letter,xInicial,yInicial);
    });
}

//Function to display the wrong letter on the screen
function showWrongLetter(wrongLetter){
    
    xInicialWrongLetter += (20 * indexWrongLetter);
    if (xInicialWrongLetter > canvas.width) {
        xInicialWrongLetter = 5;//280;
        yInicialWrongLetter = 145;//250;
        indexWrongLetter = 0;
    }
    brush.fillText(wrongLetter,xInicialWrongLetter,yInicialWrongLetter);
    xInicialWrongLetter = 10;
    indexWrongLetter++;
}

//Function to draw different part of the canvas
function drawCanvasPart(round){
    switch(round){
        case 1: 
            onePart();
            break;
        case 2: 
            twoPart();
            break;
        case 3: 
            threePart();
            break;
        case 4: 
            fourPart();
            break;
        case 5: 
            fivePart();
            break;
        case 6: 
            sixPart();
            break;
        case 7: 
            sevenPart();
            break;
        case 8: 
            eightPart();
            break;
        case 9: 
            ninePart();
            break;
    }
}

//Function to draw part 1 of the canvas
function onePart(){
    brush.moveTo(100,80);
    brush.lineTo(100,20);
    brush.stroke();
}

//Function to draw part 2 of the canvas
 function twoPart(){
    brush.moveTo(100,20);
    brush.lineTo(180,20);
    brush.stroke();
 }

//Function to draw part 3 of the canvas
function threePart(){
    brush.moveTo(180,20);
    brush.lineTo(180,30);
    brush.stroke();
}

//Function to draw part 4 of the canvas
function fourPart(){
    brush.beginPath();
    brush.arc(180,35,5, 0, 2*Math.PI);
    brush.stroke();
}

//Function to draw part 5 of the canvas
function fivePart(){
    brush.moveTo(180,40);
    brush.lineTo(180,55);
    brush.stroke();
}

//Function to draw part 6 of the canvas
function sixPart(){
    brush.moveTo(180,45);
    brush.lineTo(185,50);
    brush.stroke();
}

//Function to draw part 7 of the canvas
function sevenPart(){
    brush.moveTo(180,45);
    brush.lineTo(175,50);
    brush.stroke();
}

//Function to draw part 8 of the canvas
function eightPart(){
    brush.moveTo(180,55);
    brush.lineTo(185,60);
    brush.stroke();
}

//Function to draw part 9 of the canvas
function ninePart(){
    brush.moveTo(180,55);
    brush.lineTo(175,60);
    brush.stroke();
}

//Function to show message if lost
function showLooseMessage(secretWord){
    let msgError = "Fin del Juego!!";
    /*secretWord = secretWord.join('');
    let word = 'THE WORD WAS: ' + secretWord;*/
    xInicial = canvasCenter;
    yInicial = 15;
    brush.font="bold 18px arial";
    brush.textAlign = 'center';
    brush.fillStyle="red";
    brush.fillText(msgError,xInicial,yInicial);
    /*brush.fillStyle="salmon";
    brush.fillText(word,xInicial - 50,yInicial + 80);*/
}

//Function to show message if won
function showWinMessage(){
    let msgWin = "Ganaste, Felicidades!!!";
    xInicial = canvasCenter;
    yInicial = 15;
    brush.font="bold 18px arial";
    brush.fillStyle="#114B5F";
    brush.textAlign = 'center';
    brush.fillText(msgWin,xInicial,yInicial);
}