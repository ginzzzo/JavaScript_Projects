function getUserInput() {
    let selection = document.getElementById('Seleccionado');

    return selection
}


function getBotDecision() {
    const arrayOfChoices = ['Scissors', 'Paper', 'Rock'];
    let botDecision = arrayOfChoices[Math.floor(Math.random() * arrayOfChoices.length)];

    return botDecision
}


function startMatch(userSelection, botSelection) {
    if 
    ((userSelection == 'Paper' && botSelection == 'Sicssors') || 
    (userSelection == 'Paper' && botSelection == 'Sicssors') || 
    (userSelection == 'Paper' && botSelection == 'Sicssors'))
    {
        
        
    }


    
}

let userSelection = getUserInput();
let botSelection = getBotDecision();

