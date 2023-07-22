const outer = document.querySelector('.box_outer');
const inner = document.querySelector('.box_inner');

outer.addEventListener('click', ()=>{
    alert('Hi! I am outer DIV');
}, true)
inner.addEventListener('click', ()=>{
    alert('Hi! I am inner DIV');
},true)
