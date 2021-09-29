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


function gameMovement(event){

    let selectedSpace = event.currentTarget
    let lastDisk = selectedSpace.lastElementChild
    
   // Primeiro clique - selecionar peça (currentPiece) FEITO
   // Segundo clique - transportar peça para outro espaço (selectedSpace) FEITO
    
   //Estrutura para selecionar peça

    if(clickControl === false && lastDisk !== null){
        clickControl = true
        currentDisk = lastDisk
    }else{
        clickControl = false

        if(selectedSpace.childElementCount > 0 && currentDisk.clientWidth < lastDisk.clientWidth){
            selectedSpace.appendChild(currentDisk);
        }else if(selectedSpace.childElementCount > 0 && currentDisk.clientWidth > lastDisk.clientWidth){
            alert('Jogada Inválida');
        }else{
            if (currentDisk !== null) {
            selectedSpace.appendChild(currentDisk);
            }
        }
        currentDisk = null;
    }

    
   console.log(clickControl)
   console.log(currentDisk)
}


/*Essa função adiciona um event listener de click para cada uma 
das torres. forEach vai percorrer cada um dos elementos armazenados
em "boxes", adicionar um interceptador de clique em cada um dos elementos
e disparar a função gameMoviment, que basicamente:
    1. seleciona o último filho de cada box com um clique;
    2. move o elemento com outro clique para o box de destino;
    3. somente se as condições forem satisfeitas (somente uma peça
    menor pode ser sobreposta a uma peça menor ou movida livremente
    para um box vazio)
*/

boxes.forEach(towerBox => towerBox.addEventListener('click', gameMovement))




