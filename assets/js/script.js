const startBox = document.querySelector(".startBox");
const middleBox = document.querySelector(".middleBox");
const endBox = document.querySelector(".endBox");

//Criando peças

const piece1 = document.createElement('div');
const piece2 = document.createElement('div');
const piece3 = document.createElement('div');
const piece4 = document.createElement('div');

piece1.id = 'piece-1';
piece2.id = 'piece-2';
piece3.id = 'piece-3';
piece4.id = 'piece-4';

startBox.appendChild(piece1);
startBox.appendChild(piece2);
startBox.appendChild(piece3);
startBox.appendChild(piece4);


const boxes = document.querySelectorAll('.startBox, .middleBox, .endBox');

let clickControl = false;
let currentDisk = null;


function gameMoviment(event){

    let selectedSpace = event.currentTarget
    
    let lastDisk = selectedSpace.lastElementChild

   // Primeiro clique - selecionar peça (currentPiece) FEITO
   // Segundo clique - transportar peça para outro espaço (selectedSpace) FEITO
    
    if(clickControl === false){
        clickControl = true
        currentDisk = lastDisk
    }else{
        clickControl = false;
        
        if(selectedSpace.childElementCount > 0 && currentDisk.clientWidth < lastDisk.clientWidth){
            selectedSpace.appendChild(currentDisk);
        }else if(selectedSpace.childElementCount > 0 && currentDisk.clientWidth > lastDisk.clientWidth){
            alert('Joga Inválida');
        }else{
            selectedSpace.appendChild(currentDisk);
        }
        
    }

    
   
}

boxes.forEach(towerBox => towerBox.addEventListener('click', gameMoviment))




