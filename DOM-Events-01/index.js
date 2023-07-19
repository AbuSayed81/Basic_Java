const box = document.querySelector('.box');

box.addEventListener('mouseenter', function(){
    this.style.background = 'red';
})

box.addEventListener('mouseleave', abc);
box.addEventListener('click', off);

function abc(){
    box.style.background = 'black';
    box.style.border = '5px solid pink';
}
function off(){
   box.removeEventListener('mouseleave', abc);
}