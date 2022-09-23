/*Creado variable*/
let chk1 = document.querySelector('#chk1');
let chk2 = document.querySelector('#chk2');
let chk3 = document.querySelector('#chk3');
let reinicio = document.querySelector('.reinicio');

/*click de la primera imagen*/
chk1.onclick = function(){
    if(chk1.checked === true){
        chk1.disabled = 'true';
    }
}
/*click de la segunda imagen*/
chk2.onclick = function(){
    if(chk2.checked === true){
        chk2.disabled = 'true';
    }
}
/*click de la tercera imagen*/
chk3.onclick = function(){
    if(chk3.checked === true){
        chk3.disabled = 'true';
    }
}

/*click de reinicio*/
reinicio.onclick = function(){
    chk1.disabled = false;
    chk1.checked = false;

    chk2.disabled = false;
    chk2.checked = false;

    chk3.disabled = false;
    chk3.checked = false;
}