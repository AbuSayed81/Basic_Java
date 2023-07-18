
//get ElementById

// document.getElementById('h1id1').innerHTML =  'Element Changed By Id';
// const head1 = document.getElementById('h1id1');

// head1.style.color = 'red';
// head1.remove();
// document.getElementById('h1id1').innerHTML =  'Element Changed By Id';

const clsName = document.getElementsByClassName('h1class')

//clsName[0].innerHTML = 'Changed by Class.';
clsName[0].innerText = 'Changed by Class1.';
clsName[1].innerText = 'Changed by Class2.';
clsName[1].style.background = 'gray';
clsName[1].style.color = 'white';
clsName[1].style.padding = '10px';
clsName[1].style.border = '1px solid red';
// clsName[1].remove();


// .innerHTML = 'This  Tag changed by ID';
// console.log(document.getElementsByClassName('h1class'));