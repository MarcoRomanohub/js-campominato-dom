const gridContainer = document.querySelector('.grid-container');
const btnStart = document.querySelector('.btn-start');
const levelSelect = document.getElementById('level');


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
  if(difficultyLevel == 0){
    for(let i =1; i <= 100; i++){
      const square = getSquare(i);
      gridContainer.append(square);
      square.classList.add('square100')
    }
  }else if(difficultyLevel == 1){
    for(let i =1; i <= 81; i++){
      const square = getSquare(i);
      gridContainer.append(square);
      square.classList.add('square81')
    }
  }else{
    for(let i =1; i <= 49; i++){
      const square = getSquare(i);
      gridContainer.append(square);
      square.classList.add('square49')
    }
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
    this.innerHTML = (!this.classList.contains('clicked'))
                      ? this.innerHTML = this._sqID       
                      : this.innerHTML = '';

    this.classList.toggle('clicked');

  })

  return sq;
}


function reset (){ 
  gridContainer.innerHTML = '';
}