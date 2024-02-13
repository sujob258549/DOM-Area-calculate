
const rhombusButton    = document.getElementById('rhombus-buttons');
const rhombusDisplay    = document.getElementById('rhombus-Display');
const rhombusWidth    = document.getElementById('rhombus-base1');
const rhombusHeight      = document.getElementById('rhombus-base2');


function rhombusAreacalculet(rhombus){
    const rhombusId = document.getElementById(rhombus);
    const rhombusValu = rhombusId.value;
    const rhombusFlot = parseFloat(rhombusValu);
    return rhombusFlot;
}



rhombusButton.addEventListener('click', function parallelogramAreaMath(){
    const rhombusWidthCalculat = parallelogramAreacalculet('rhombus-base1');
    const rhombusHeightCalculat = parallelogramAreacalculet('rhombus-base2');
    const rhombusCalculete = 0.5 * rhombusHeightCalculat * rhombusWidthCalculat;
    rhombusDisplay.innerText = rhombusCalculete;
    result.innerText = rhombusCalculete;
})