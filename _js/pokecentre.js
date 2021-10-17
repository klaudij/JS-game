console.log('SPaarpotje bij houden');

var voegGeld = document.getElementById('moneyCurrency')
voegGeld.textContent = spaarpotje  ;

// declaratie van DOM objecten
var eveeKopen = document.getElementById('eveee')
var prinplupKopen = document.getElementById('prinplup')
var goodraKopen = document.getElementById('goodra')
var gyaradosKopen = document.getElementById('gyarados')
var mewKopen = document.getElementById('mew')

eveeM = 400;
prinpM = 500;
goodraM = 620;
gyaradosM = 900;
mewM = 1000;

// DOM manipulatie functie
function buyEvee(){
    voegGeld.textContent = spaarpotje  ;

    if (spaarpotje >= 400){
        spaarpotje = spaarpotje - eveeM ;
    }
}

function buyPrinplup(){
    voegGeld.textContent = spaarpotje  ;

    if (spaarpotje >= 500){
        spaarpotje = spaarpotje - prinpM ;
    }
}

function buyGoodra(){
    voegGeld.textContent = spaarpotje  ;

    if (spaarpotje >= 620){
        spaarpotje = spaarpotje - goodraM  ;
    }
}

function buyGyarados(){
    voegGeld.textContent = spaarpotje  ;

    if (spaarpotje >= 900){
        spaarpotje = spaarpotje - gyaradosM ;
    }
}

function buyMew(){
    voegGeld.textContent = spaarpotje  ;

    if (spaarpotje >= 1000){
        spaarpotje = spaarpotje - mewM ;
    }
}

//eventListeners
eveeKopen.addEventListener('click' , buyEvee );
prinplupKopen.addEventListener('click' , buyPrinplup );
goodraKopen.addEventListener('click' , buyGoodra );
gyaradosKopen.addEventListener('click' , buyGyarados );
mewKopen.addEventListener('click' , buyMew );