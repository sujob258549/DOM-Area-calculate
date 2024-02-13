
const parallelogramButton    = document.getElementById('parallelogram-bitton');
const parallelogramDisplay    = document.getElementById('parallelogram-display');
const parallelogramWidth    = document.getElementById('parallelogram-width');
const parallelogramHeight      = document.getElementById('parallelogram-height');


function parallelogramAreacalculet(parallelogram){
    const parallelogramId = document.getElementById(parallelogram);
    const parallelogramValu = parallelogramId.value;
    const paralalogramFlot = parseFloat(parallelogramValu);
    return paralalogramFlot;
}



parallelogramButton.addEventListener('click', function parallelogramAreaMath(){
    const parallelogramWidthCalculat = parallelogramAreacalculet('parallelogram-width');
    const parallelogramHeightCalculat = parallelogramAreacalculet('parallelogram-height');
    const parallelogramCalculete = parallelogramHeightCalculat * parallelogramWidthCalculat;
    parallelogramDisplay.innerText = parallelogramCalculete;
    result.innerText = parallelogramCalculete;
})