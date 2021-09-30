
//Pop-up de movimento inválido 
//To do: colocar dentro de uma função;

    const invalidMovement = document.createElement('div');
    const text = document.createElement('p');
    const btn = document.createElement('button');
    
    mainContainer.appendChild(invalidMovement);
    invalidMovement.appendChild(text);
    invalidMovement.appendChild(btn);
    invalidMovement.id = 'invalid-popup';
        

    text.className = 'text-popups';
    btn.id = 'btn-close';
    text.innerText = 'Oops! You can\'t do this!';
    btn.innerText = 'Continue';

    const btnClose = document.getElementById('btn-close');
    const myPopUp = document.getElementById('invalid-popup');
    invalidMovement.style.display = 'none';
