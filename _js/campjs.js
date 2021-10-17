console.log('hallo00oo')


////////// PIKACHU MAAKT GELUID WANNEER JE OP HEM DRUKT /////////////
// declaraties van HTML elementen
var pikaButton = document.getElementById('pikachu');

// DOM manipulatie functie
function playPika(){
    console.log('pikachu maakt geluid')
    pikaSound.play();
}
//eventListeners
pikaButton.addEventListener("dblclick" , playPika);


////////// PIKACHU MAAKT EEN BOOS GELUID WANNEER JE HEM SLEEPT /////////////
// declaraties van HTML elementen
var pikachuThunderbolt = document.querySelector('#angryPikachu');

// DOM manipulatie functie
function thunderBolt() {
    console.log('oh oh pikachu is boos');
    pikachuThunderbolt.play();
    pikaImg.src = 'images/pikachuangry.png';
}

function still() {
    pikachuThunderbolt.pause();
    pikaImg.src = 'images/pikachubuddy.png';
}
//eventListeners
pikaButton.addEventListener('dragstart' , thunderBolt );
pikaButton.addEventListener('dragend' , still );

//////////LAAT PIKACHU WANDELEN/////////////
// declaraties van HTML elementen & DOM manipulatie
var pikaImg = document.querySelector('#pikachu1');
var hpBar = document.getElementById('healthMee');

var x = 445 ;
var y = 0 ;
var speed = 20 ; 

var x1 = -10 ;
var y1 = -30 ;

// eventHandlers 
function pikachuWandelt( event ) {
    console.log(event.key) ;

    if ( event.key == 'ArrowLeft') {
        x = x - speed
    } else if ( event.key == 'ArrowRight') {
        x = x + speed
    } else if ( event.key == 'ArrowUp') {
        y = y - speed
    } else if ( event.key == 'ArrowDown') {
        y = y + speed
    } else { 
        pikaImg.classList.add('spring') ;
        width-= Math.round(Math.random() * 0);
        // deze regel haalt na 500ms de class weer van de aap, zodat ie de volgende keer weer kan springen.
        setTimeout( ()=> pikaImg.classList.remove('spring') , 500);
    }
    pikaImg.style['position'] = 'relative';
    pikaImg.style['top'] = y + 'px';
    pikaImg.style['left'] = x + 'px' ;
}

function hpBarWandelt( event ) {
    console.log(event.key) ;

    if ( event.key == 'ArrowLeft') {
        x1 = x1 - speed
    } else if ( event.key == 'ArrowRight') {
        x1 = x1 + speed
    } else if ( event.key == 'ArrowUp') {
        y1 = y1 - speed
    } else if ( event.key == 'ArrowDown') {
        y1 = y1 + speed
    } 

    healthMee.style['position'] = 'relative';
    healthMee.style['top'] = y1 + 'px';
    healthMee.style['left'] = x1 + 'px' ;
}
// eventListeners 
document.body.addEventListener('keydown' , pikachuWandelt )
document.body.addEventListener('keydown' , hpBarWandelt )


////////// ACHTERGROND VERANDERD NAAR ANDERE TIJD WANNEER JE OP DE ZON BUTTON DRUKT /////////////
// declaraties van HTML elementen
var pokemons = ['zapdos.png','pidgeot.png','swellow.png', 'hoOh.png'];

var zonButton = document.querySelector('#zonButton');
var bg = document.querySelector('main')

var flyingP = document.querySelector('#zapdos')
var pokeBall = document.querySelector('#catch')

var huidigPoke = 0 ;


flyingP.hidden=true;
pokeBall.hidden=true;

// DOM manipulatie functie
function changeBG() {
    console.log('achtergond veranderen');
    if(bg.classList.contains('dark')){
        bg.classList.remove('dark') ;
    } else {
        bg.classList.add('dark') ;
    }

    if(bg.classList.contains('dark')){
        flyingP.hidden=false;
        pokeBall.hidden=false;
    }else{
        flyingP.hidden=true;
        pokeBall.hidden=true;
    }
    toonPokemons();
}

function toonPokemons(){
    console.log('laat pokemon zien' + huidigPoke)

    huidigPoke = huidigPoke+1;
    flyingP.scr= 'images/' + pokemons[huidigPoke];
    if ( huidigPoke > pokemons.length -1 ) { // voorbij het einde 
		huidigPoke = 0 ; // terug naar begin
	}

}

//eventListeners
zonButton.addEventListener("click", changeBG);
pokeBall.addEventListener('click' ,  toonPokemons);


////////// HEALTHBAR /////////////
// declaraties van HTML elementen
var picnicButton = document.querySelector('#picnic')
var tentButton = document.querySelector('#tent')
var battleButton =document.querySelector('#battle')

var healthBar = document.querySelector('#health');
var opNieuw = document.querySelector('#fainted');


var width=100;
//wanneer de HP op 0 staat is het game over
opNieuw.hidden = true;

// DOM manipulatie functie
function barColor(){
    if (width > 100) {///verkorte versie- -- > width=width>100?width=100:width;
        width = 100; 
    } else if (width > 0) {
        document.body.classList.remove('body');
        pikaImg.src = 'images/pikachubuddy.png';
        opNieuw.hidden = true;
    }
    
    if (width>= 40) {
        console.log('Geen rood meer')
        healthBar.classList.remove('barRed');
        healthBar.classList.add('barOrange');
    } 
    
    if (width>= 60) {
        console.log('geen oranje meer')
        healthBar.classList.remove('barOrange'); 
    }

    if (width <=0) {
        console.log('dead');
        width = 0;
        pikaImg.src = 'images/pikachubuddydead.png'; 
        document.body.classList.add('body');
        opNieuw.hidden = false;
    }

    if (width<= 40) {
        console.log('Rode balk')
        healthBar.classList.add('barRed');
        healthBar.classList.remove('barOrange');
    } else if (width<=60) {
        console.log('Oranje balk')
        healthBar.classList.add('barOrange');
    }

        healthBar.style.width = width + '%'; 
        healthBar.innerHTML = width + 'hp';
}

function addTentPicnic()  {
    console.log('hp gaat omhoog door te eten of slapen')
    width += Math.round(Math.random() * 5);
    barColor();
}

function removeBattle() {
    console.log('hp gaat omlaag door de battles')
    width-= Math.round(Math.random() * 30);
    barColor();
}

function removeKeyboard() {
    console.log('hp gaat omlaag door te lopen of een salto te maken')
    width-= Math.round(Math.random() * 5);
    barColor();
}


//eventListeners
picnicButton.addEventListener('click' , addTentPicnic ) ;
tentButton.addEventListener('click' , addTentPicnic );
battleButton.addEventListener('click' , removeBattle);
document.body.addEventListener('keydown' , removeKeyboard);


//////////EARNING MONEY FROM BATTLE/////////////
// declaraties van HTML elementen & DOM manipulatie
var voegGeld = document.getElementById('moneyCurrency')
 voegGeld.textContent = spaarpotje ;

// DOM manipulatie functie
function addMoney() {
    console.log('Verdien geld door op de battle button te drukken');
        spaarpotje += Math.round(Math.random() * 80) ;
        voegGeld.textContent = spaarpotje ;
}
//eventListeners
battleButton.addEventListener('click' , addMoney );



////////// DIGITAL CLOCK /////////////
function ShowMeTime() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var amOFpm = "PM";
  
    if (hour >= 12) {
        hour = hour - 12;
        amOFpm = "PM";
    }else {
        amOFpm = "AM";
    }

    if (hour == 0) {
        hour = 12;
    } 
    
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
  
    var currentTime = hour + " : " + min + " : " + sec + " " + amOFpm; 
    document.getElementById("clock").innerHTML = currentTime;
    }

function updateTime(k) { 
    if (k < 10) {
        return "0" + k;
    }else {
        return k;
        }
    }

setInterval(ShowMeTime, 1000);
ShowMeTime();