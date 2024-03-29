const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.orange');
const circle = document.querySelector('.circle');

const getBgColor = (selectElement)=>{
    return window.getComputedStyle(selectElement).backgroundColor
};

const redColorElement = getBgColor(red);
const greenColorElement = getBgColor(green);
const blueColorElement = getBgColor(blue);


// red.addEventListener('mouseenter',() =>{
//     circle.style.background = redColorElement;
// });
// green.addEventListener('mouseenter',() =>{
//     circle.style.background = greenColorElement;
// })
// blue.addEventListener('mouseenter',() =>{
//     circle.style.background = blueColorElement;
// })

const magicColor = (element, color) => {
    return element.addEventListener('mouseenter', ()=>{
        circle.style.background = color;
    })
};

magicColor(red,getBgColor(red));
magicColor(green,getBgColor(green));
magicColor(blue,getBgColor(blue));