
const ellipseButton = document.getElementById('ellipse-button');
const ellipseDisplay = document.getElementById('ellipse-display');
const ellipseWidth = document.getElementById('ellipse-width');
const ellipseHeight = document.getElementById('ellipse-hight');
// const result = document.getElementById('result');


function ellipseAreacalculet(pentagon) {
    const ellipseId = document.getElementById(pentagon);
    const ellipseValu = ellipseId.value;
    const ellipseFlot = parseFloat(ellipseValu);
    return ellipseFlot;
}



ellipseButton.addEventListener('click', function ellipseAreaMath() {
    const ellipseWidthCalculat = ellipseAreacalculet('ellipse-width');
    const ellipseHeightCalculat = ellipseAreacalculet('ellipse-hight');
    const ellipseCalculete = 3.1416 * ellipseHeightCalculat * ellipseWidthCalculat;
    ellipseDisplay.innerText = ellipseCalculete.toFixed(3);
    result.innerText = ellipseCalculete;
})