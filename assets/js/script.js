//Selecionando os elementos HTML

const startBox = document.querySelector(".startBox");
const middleBox = document.querySelector(".middleBox");
const endBox = document.querySelector(".endBox");

//Criando peças

const piece1 = document.createElement('div');
const piece2 = document.createElement('div');
const piece3 = document.createElement('div');
const piece4 = document.createElement('div');

//Adicionando IDs para fins de estilização

piece1.id = 'piece-1';
piece2.id = 'piece-2';
piece3.id = 'piece-3';
piece4.id = 'piece-4';

//Acrescentando as peças à div inicial

startBox.appendChild(piece1);
startBox.appendChild(piece2);
startBox.appendChild(piece3);
startBox.appendChild(piece4);

//Selecionando todas as divs para adicionar os handlers de click

const boxes = document.querySelectorAll('.startBox, .middleBox, .endBox');

//Variáveis de controle para cliques e discos

let clickControl = false;
let currentDisk = null;

//Função de movimentação das peças

function gameMovement(event){

    let selectedSpace = event.currentTarget
    let lastDisk = selectedSpace.lastElementChild

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

    
//    console.log(clickControl)
//    console.log(currentDisk)
}

//Aplicação do método forEach na variável que armazena todas as divs do
//tabuleiro seguida de função towerBox, que adicionará às divs o interceptador
//de clique que executará a função gameMovement.

boxes.forEach(towerBox => towerBox.addEventListener('click', gameMovement))




