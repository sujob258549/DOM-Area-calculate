const trianglelButton = document.getElementById('triangle-button');
const triangleDisplay = document.getElementById('triangle-display');
const triangleHeight = document.getElementById('triangle-height');
const triangleBase = document.getElementById('triangle-base');
const result = document.getElementById('result');

trianglelButton.addEventListener('click', function () {
    const triangleHei = triangleHeight.value;
    const triHEightFlot = parseFloat(triangleHei);

    const triangleBes = triangleBase.value;
    const triangleBaseflot = parseFloat(triangleBes)

    const tringlearea = 0.5 * triHEightFlot * triangleBaseflot;
    triangleDisplay.innerText = tringlearea;
    result.innerText = tringlearea;
   
    triangleHeight = '';
    triangleBase = '';

})