var canvas = document.getElementById("ahorcado");
let brush = canvas.getContext("2d");

let xInicialWrongLetter = 5;
let yInicialWrongLetter = 130;
let indexWrongLetter = 0;

let latterSize = 20;
let spaceSize = 10;
let canvasCenter = canvas.width / 2;
let letterCenter = 0;

//brush.lineWidth=2;
brush.font="bold 10px arial";

//Function to create base of canvas
function createBaseCanvas(){
    brush.beginPath();
    brush.fillStyle='#804000';
    brush.strokeStyle ="#804000";
    brush.lineWidth=4;
    brush.moveTo(100, 80);
    brush.lineTo(50, 100);
    brush.lineTo(150, 100);
    brush.lineTo(100, 80);
    brush.stroke();
    brush.fill();
    
}

//Function to create lines of the letters of the secret word
function createLinesWord(word){
    letterCenter = ((word.length * latterSize) + ((word.length - 1) * spaceSize)) / 2;
    let xInicial = canvasCenter - letterCenter;
    let yInicial = 115;

    for(let i=0; i < word.length; i++){
        brush.beginPath();
        brush.fillStyle='black';
        brush.strokeStyle ="black";
        brush.lineWidth=2;
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
        brush.beginPath();
        brush.fillStyle='black';
        brush.strokeStyle ="black";
        let xInicial = canvasCenter - letterCenter + 6;
        
        xInicial += (30 * position);
        brush.fillText(letter,xInicial,yInicial);
        brush.stroke();
    });
}

//Function to display the wrong letter on the screen
function showWrongLetter(wrongLetter){
    
    xInicialWrongLetter += (20 * indexWrongLetter);
    if (xInicialWrongLetter > canvas.width) {
        xInicialWrongLetter = 5;
        yInicialWrongLetter = 145;
        indexWrongLetter = 0;
    }
    brush.beginPath();
    brush.fillStyle='black';
brush.strokeStyle ="black";
    brush.fillText(wrongLetter,xInicialWrongLetter,yInicialWrongLetter);
    xInicialWrongLetter = 10;
    indexWrongLetter++;
    brush.stroke();
}

//Function to draw different part of the canvas
function drawCanvasPart(round){
    switch(round){
        case 1: 
            horcaMastil();
            break;
        case 2: 
            horcaViga();
            break;
        case 3: 
            horcaSoga();
            break;
        case 4: 
            presoCabeza();
            break;
        case 5: 
            presoTronco();
            break;
        case 6: 
            presoManoDer();
            break;
        case 7: 
            presoManoIzq();
            break;
        case 8: 
            presoPieDer();
            break;
        case 9: 
            presoPieIzq();
            break;
    }
}

//Function to draw part 1 of the canvas
function horcaMastil(){
    brush.beginPath();
    brush.fillStyle='#804000';
    brush.strokeStyle ="#804000";
    brush.lineWidth=4;
    brush.moveTo(100,80);
    brush.lineTo(100,20);
    brush.stroke();
}

//Function to draw part 2 of the canvas
 function horcaViga(){
    brush.beginPath();
    brush.fillStyle='#804000';
    brush.strokeStyle ="#804000";
    brush.lineWidth=4;
    brush.moveTo(100,20);
    brush.lineTo(180,20);
    brush.stroke();
 }

//Function to draw part 3 of the canvas
function horcaSoga(){
    brush.beginPath();
    brush.fillStyle='#804000';
    brush.strokeStyle ="#804000";
    brush.lineWidth=4;
    brush.moveTo(180,20);
    brush.lineTo(180,30);
    brush.stroke();
}

//Function to draw part 4 of the canvas
function presoCabeza(){
    brush.beginPath();
    brush.fillStyle='#fdddca';
    brush.strokeStyle ="#fdddca";
    brush.lineWidth=2;
    brush.beginPath();
    brush.arc(180,35,5, 0, 2*Math.PI);
    brush.stroke();
}

//Function to draw part 5 of the canvas
function presoTronco(){
    brush.beginPath();
    brush.fillStyle='#fdddca';
    brush.strokeStyle ="#fdddca";
    brush.lineWidth=2;
    brush.moveTo(180,40);
    brush.lineTo(180,55);
    brush.stroke();
}

//Function to draw part 6 of the canvas
function presoManoDer(){
    brush.beginPath();
    brush.fillStyle='#fdddca';
    brush.strokeStyle ="#fdddca";
    brush.lineWidth=2;
    brush.moveTo(180,45);
    brush.lineTo(185,50);
    brush.stroke();
}

//Function to draw part 7 of the canvas
function presoManoIzq(){
    brush.beginPath();
    brush.fillStyle='#fdddca';
    brush.strokeStyle ="#fdddca";
    brush.lineWidth=2;
    brush.moveTo(180,45);
    brush.lineTo(175,50);
    brush.stroke();
}

//Function to draw part 8 of the canvas
function presoPieDer(){
    brush.beginPath();
    brush.fillStyle='#fdddca';
    brush.strokeStyle ="#fdddca";
    brush.lineWidth=2;
    brush.moveTo(180,55);
    brush.lineTo(185,60);
    brush.stroke();
}

//Function to draw part 9 of the canvas
function presoPieIzq(){
    brush.beginPath();
    brush.fillStyle='#fdddca';
    brush.strokeStyle ="#fdddca";
    brush.lineWidth=2;
    brush.moveTo(180,55);
    brush.lineTo(175,60);
    brush.stroke();
}

//Function to show message if lost
function showLooseMessage(secretWord){
    let msgError = "Fin del Juego!!";
    /*secretWord = secretWord.join('');
    let word = 'THE WORD WAS: ' + secretWord;*/
    brush.beginPath();
    xInicial = canvasCenter;
    yInicial = 15;
    brush.font="bold 18px arial";
    brush.textAlign = 'center';
    brush.fillStyle="red";
    brush.strokeStyle ="red";
    brush.fillText(msgError,xInicial,yInicial);
    brush.stroke();

}

//Function to show message if won
function showWinMessage(){
    let msgWin = "Ganaste, Felicidades!!!";
    brush.beginPath();
    xInicial = canvasCenter;
    yInicial = 15;
    brush.font="bold 18px arial";
    brush.fillStyle="#114B5F";
    brush.strokeStyle ="#114b5f";
    brush.textAlign = 'center';
    brush.fillText(msgWin,xInicial,yInicial);
    brush.stroke();
}