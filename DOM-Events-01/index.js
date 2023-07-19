const box = document.querySelector('.box');

box.addEventListener('mouseenter', function(){
    this.style.background = 'red';
})

box.addEventListener('mouseleave', abc);

function abc(){
    box.style.background = 'black';
    box.style.border = '5px solid pink';
}
