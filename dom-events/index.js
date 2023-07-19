// function xyz(){
//     const head = document.querySelector('#show_case');
//     head.innerHTML = Date();
//     head.style.border = '1px solid red';
//     head.style.padding = '5px';
//     head.style.background = 'blue';
//     head.style.color = 'white';
// }

function u_case(){
    const result = document.getElementById('ucase');
     result.value = result.value.toUpperCase();

} 

function selector(){
    const result = document.getElementById('month_name').value;

    document.getElementById('show_case').innerHTML = result;

}




