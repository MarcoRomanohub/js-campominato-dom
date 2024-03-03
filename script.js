const gridContainer = document.querySelector('.grid-container');
const btnStart = document.querySelector('.btn-start');
const levelSelect = document.getElementById('level');
const levels = [100, 81, 49];

let difficultyLevel = levelSelect.value;
console.log(difficultyLevel);
// TODO: POSSO RACCHIUDERE TUTTO IN UNA FUNZIONE?
levelSelect.addEventListener('click', function(){
  difficultyLevel = levelSelect.value;
  console.log(difficultyLevel);
});
btnStart.addEventListener('click', function(){
  difficultyLevel = levelSelect.value;
  console.log(difficultyLevel);
});
btnStart.addEventListener('click', init);
// FUNCTIONS ////////

function init(){
  reset();
  squareNumbers = levels[levelSelect.value]
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
    // Mostro il numero nel quadrato
    // metodo classico :

    // if(this.innerHTML === ''){
    //   this.innerHTML = this._sqID;
    // }else{
    //   this.innerHTML = '';
    // } 

    // Metodo ternario :
    // this.innerHTML = (!this.classList.contains('clicked'))
    //                   ? this.innerHTML = this._sqID       
    //                   : this.innerHTML = '';

    this.classList.add('clicked');

  })

  return sq;
}


function reset (){ 
  gridContainer.innerHTML = '';
}