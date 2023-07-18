//document.querySelector(.h1class);
// const cls = document.querySelector('.h1class');
// cls.innerText = 'Content Changed by QuerySelector.';
// cls.style.color = 'red';

const list = document.querySelectorAll('.item');

for(var i=0; i<list.length; i++){
    list[i].style.color = 'red';
    list[i].style.background = 'yellow';

}



// console.log(document.querySelectorAll('.item'));
