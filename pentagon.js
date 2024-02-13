
const pentagonButton    = document.getElementById('pentagon-button');
const pentagonDisplay    = document.getElementById('pentagon-display');
const pentagonWidth    = document.getElementById('pentagon-base');
const pentagonHeight      = document.getElementById('pentagon-height');



function pentagonAreacalculet(pentagon){
    const pentagonId = document.getElementById(pentagon);
    const pentagonValu = pentagonId.value;
    const pentagonFlot = parseFloat(pentagonValu);
    return pentagonFlot;
}



pentagonButton.addEventListener('click', function pentagonAreaMath(){
    const pentagonWidthCalculat = pentagonAreacalculet('pentagon-base');
    const pentagonHeightCalculat = pentagonAreacalculet('pentagon-height');
    const pentagonCalculete = 0.5 * pentagonHeightCalculat * pentagonWidthCalculat;
    pentagonDisplay.innerText = pentagonCalculete;
    result.innerText = pentagonCalculete;

})