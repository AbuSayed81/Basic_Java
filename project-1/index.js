const goTop = document.querySelector(".back_btn");

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 100){
        goTop.classList.add('xyz');
    }else{
        goTop.classList.remove('xyz');
    }
})