const main = document.querySelector('.game-wrapper');
const playBtn = document.getElementById('play');
const levelSelect = document.getElementById('level');
const endMessage = document.querySelector('.endMessage');

// DATA
const levels = [100, 81, 49];
let squareNumbers;
let bombs = [];
const numBombs = 16;
let points = 0;

// EVENTS
playBtn.addEventListener('click', play)


// FUNCTIONS ////////

function play(){
  reset();
  squareNumbers = levels[levelSelect.value]
  
  bombs = generateBombs();
  // bombs = [1,2,3];
  generatePlayground();
}

function generateBombs(){
  
  const bombsTemp = [];
  while (bombsTemp.length < numBombs){
    const bombId = Math.ceil(Math.random() * squareNumbers);
    if (!bombsTemp.includes(bombId)) bombsTemp.push(bombId) 
  }

  return bombsTemp;
}


function generatePlayground(){

  const grid = document.createElement('div');
  grid.className = 'grid';

  for (let i = 1; i <= squareNumbers; i++) {
    const square = createSquare(i);
    grid.append(square);
  }

  main.append(grid);
}
  
function createSquare(index) {
  const square = document.createElement('div');
  square.className = 'square';
  square.classList.add('square' + squareNumbers);
  square._squareID = index;
  square.addEventListener('click', handleclick)
  return square;
}

function handleclick() {
  console.log('this._squareID', this._squareID);

  if (bombs.includes(this._squareID)) {
    endGame(false)
  }else{

    if (!this.classList.contains('clicked')) {
      points++;
    }
    // console.log(points);

    this.classList.add('clicked');

    console.log(points);

    if (points === squareNumbers - numBombs) {
      endGame(true)
    }
  }
  this.removeEventListener('click', handleclick)
}

function endGame(isWin) {
  let message;
  showBombs();
  blockGrid();
  if (isWin) {
    message = `Hai Vinto!`;
  } else{
    message = `Hai Perso! Punti: ${points} su ${squareNumbers - numBombs}`;
  }
  endMessage.innerHTML = message;
}

function blockGrid() {
  const endGameEl = document.createElement('div');
  endGameEl.className = 'end-game';
  main.append(endGameEl)
}

function showBombs() {

  const squares = document.querySelectorAll('.square')
  for (let i = 0; i < squares.length; i++) {
    const square = squares[i];
    if (bombs.includes(square._squareID)) {
      square.classList.add('bomb');
    }
  }

}

function reset (){ 
  main.innerHTML = '';
  points = 0;
  bombs = [];
  endMessage.innerHTML = '';
}