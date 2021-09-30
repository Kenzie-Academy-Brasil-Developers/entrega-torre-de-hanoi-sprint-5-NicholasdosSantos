//Capturando Section no DOM

const mainContainer = document.querySelector('section');

//Criando torres no DOM e acrecentando classes

const startBox = document.createElement('div');
const middleBox = document.createElement('div');
const endBox = document.createElement('div');

startBox.className = 'startBox';
middleBox.className = 'middleBox';
endBox.className = 'endBox';

//Incluindo torres como filhas de mainContainer

mainContainer.appendChild(startBox);
mainContainer.appendChild(middleBox);
mainContainer.appendChild(endBox);

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
            invalidPopUp();
        }else{
            if (currentDisk !== null) {
            selectedSpace.appendChild(currentDisk);
            }
        }
        currentDisk = null;
    }

    //Condição de vitória

    if(boxes[2].childElementCount === 4){
        popupWin()
    }
    
    function popupWin(){
        const popupWin = document.createElement('div');
        const text = document.createElement('p');
        const btn = document.createElement('button');

        mainContainer.appendChild(popupWin);
        popupWin.appendChild(text);
        popupWin.appendChild(btn);
        popupWin.id = 'winner-popup';
        

        text.className = 'text-popups';
        btn.className = 'btn-popups';
        text.innerText = 'Congrats! You win!';
        btn.innerText = 'Play again!';


        btn.addEventListener('click', reset = () => {
        location.reload()
        });
    }
    
}

function invalidPopUp(){
    invalidMovement.style.display = 'block';
        
    btnClose.addEventListener('click', function(){
        invalidMovement.style.display = 'none';
    });

}

//Button reset

const myResetButton = document.getElementById('my-reset-button');

myResetButton.addEventListener('click', reset = () => {
        location.reload()
        });

//Aplicação do método forEach na variável que armazena todas as divs do
//tabuleiro seguida de função towerBox, que adicionará às divs o interceptador
//de clique que executará a função gameMovement.

boxes.forEach(towerBox => towerBox.addEventListener('click', gameMovement))
