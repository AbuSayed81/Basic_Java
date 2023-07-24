const toTop = document.querySelector('.back-top-btn');

window.addEventListener('scroll', ()=>{
    if(window.pageyoffset > 100){
        toTop.classList.add('active');
    }
    else{
        toTop.classList.remove('active');
    }
})
