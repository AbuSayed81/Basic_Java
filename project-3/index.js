const text = document.querySelector(".text");
const read_more_btn = document.querySelector(".read_more_btn");

read_more_btn.addEventListener('click', (e)=>{
    text.classList.toggle('show-more');
    if(read_more_btn.innerHTML === 'Read More'){
        read_more_btn.innerHTML = 'Read Less';
    }else{
        read_more_btn.innerHTML = 'Read More';
    }
})
