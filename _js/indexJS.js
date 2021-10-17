console.log('test test')

////////// WANNEER JE EEN POKEMON HEBT GEKOZEN VERSCHIJNT ER EEN START BUTTON /////////////
// declaraties van HTML elementen pikachu
var startButton = document.querySelector('#startButton');
var pikaButton = document.querySelector('#pikachuButton');
var eveeButton = document.querySelector('#eveeButton')

startButton.hidden = true;

// DOM manipulatie functie
function toonStartButton() {
   if (pikaButton.classList.contains('large')){
       startButton.hidden = false;
       console.log('check false pika');
    } else if(eveeButton.classList.contains('large')){
        startButton.hidden = false;
        console.log('check false evee');
    } else {
        startButton.hidden = true;
        console.log('check true');
    } 
}

////////// DE POKEMON BUTTON WORDT GROOT/KLEIN WANNEER JE EROP DRUKT,/////////////
// DOM manipulatie functie
function kiesPika(){
    console.log('kies pika');    
    if(eveeButton.classList.contains('large')){
        eveeButton.classList.remove('large');
        console.log('check evee button large')
    }
    pikaButton.classList.toggle('large');
    toonStartButton();
}

function kiesEvee () {
    console.log('kies evee');
    if(pikaButton.classList.contains('large')){
        pikaButton.classList.remove('large');
    }
    eveeButton.classList.toggle('large');
    toonStartButton();
}

//eventListeners
pikaButton.addEventListener("click" , kiesPika);
eveeButton.addEventListener("click" , kiesEvee);



