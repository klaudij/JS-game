console.log('money');


// declaraties van HTML elementen
var spaarpotje ; 

if ( sessionStorage.getItem('bewaardeGeld') ) {
    spaarpotje  = Number(sessionStorage.getItem('bewaardeGeld')) 
} else {
    spaarpotje  = 0 ;
}

function bewaarZakgeld(e) {
    sessionStorage.setItem('bewaardeGeld', spaarpotje );
 }
//eventListeners
 window.addEventListener('beforeunload' , bewaarZakgeld )


