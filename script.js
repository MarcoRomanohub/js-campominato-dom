const gridContainer = document.querySelector('.grid-container');
const btnStart = document.querySelector('.btn-start');
const levelSelect = document.getElementById('level');
const levels = [100, 81, 49];

let bombs = [];
let  numeroEstratto = [];
let difficultyLevel = levelSelect.value;
console.log(difficultyLevel);
let squareNumbers = levels[levelSelect.value];

// TODO: POSSO RACCHIUDERE TUTTO IN UNA FUNZIONE?
levelSelect.addEventListener('click', function(){
  difficultyLevel = levelSelect.value;
  console.log(difficultyLevel);
});
btnStart.addEventListener('click', function(){
  difficultyLevel = levelSelect.value;
  console.log(difficultyLevel);
  squareNumbers = levels[levelSelect.value];
  
  for (let i = 0; i < 16; i++) {
    bombs = Math.ceil(Math.random() * squareNumbers) ;
    console.log(bombs);
    numeroEstratto = bombs;
    console.log('bomba' + numeroEstratto);
    if(numeroEstratto == bombs){
  
    }
  }
});
btnStart.addEventListener('click', init);

// FUNCTIONS ////////

function init(){
  reset();
    for(let i =1; i <= squareNumbers; i++){
      const square = getSquare(i);
      gridContainer.append(square);
      square.classList.add('square' + squareNumbers)
    }
}

function getSquare(numero){
  const sq = document.createElement('div');
  sq.className = 'square';

  sq._sqID = numero;

  sq.addEventListener('click', function(){
    console.log(this._sqID);

    this.classList.add('clicked');

  })

  return sq;
}


function reset (){ 
  gridContainer.innerHTML = '';
}