let navlist = document.querySelector('.nav-list');
let openicon = document.querySelector('.bx-menu');
let closeicon = document.querySelector('.bx-x');

openicon.addEventListener('click' , show)
    
function show(){
    navlist.style.display = 'flex';
    navlist.style.top = '0rem';
}


closeicon.addEventListener('click' , shut)

function shut(){
    navlist.style.top = '-100%';
}