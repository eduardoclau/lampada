const liga = document.getElementById('turnOn');
const desliga = document.getElementById('turnOff');
const reinicia = document.getElementById('reset');
const lamp = document.getElementById('lamp');

function isLampBroke(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampON(){
    if(!isLampBroke()){
    lamp.src = './img/ligada.jpg'
    }
}

function lampOFF(){
    if(!isLampBroke()){
    lamp.src = './img/desligada.jpg'
    }
}

function lampBroke(){
    lamp.src = '/img/quebrada.jpg'
}

function toBack(){
    window.location.reload();
}


turnOn.addEventListener('click', lampON);
lamp.addEventListener('mouseover', lampON);

turnOff.addEventListener('click', lampOFF);
lamp.addEventListener('mouseleave', lampOFF);
lamp.addEventListener('dblclick', lampBroke);

reset.addEventListener('click', toBack);



