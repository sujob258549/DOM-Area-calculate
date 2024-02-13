

const rectangleButton = document.getElementById('rectangle-button');
const rectangleDisplay = document.getElementById('rectangle-display');
// const rectangleBase = document.getElementById('rectangle-base');
// const rectangleHeight= document.getElementById('rectangle-height');


function rectangleAreaCalculete(rectangle){
    const rectiangleMath = document.getElementById(rectangle);
    const rectiangleValu = rectiangleMath.value;
    const rectiangleFlot = parseFloat(rectiangleValu);
    return rectiangleFlot;
}




rectangleButton.addEventListener('click', function(){
    const recBase = rectangleAreaCalculete('rectangle-base');
    const recHeight = rectangleAreaCalculete('rectangle-height');

    const recArea = recBase * recHeight;
    rectangleDisplay.innerText = recArea;
    result.innerText = recArea;
})