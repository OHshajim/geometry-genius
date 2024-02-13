function rhombusAreaCalculate() {
    const d1 = getValueById('rhombus-d1');
    const d2 = getValueById('rhombus-d2');
    const area = 0.5 * d1 * d2;
    outputById('rhombus-area', area)
}

function getValueById(getId) {
    const id = document.getElementById(getId);
    const idValue = id.value;
    const value = parseFloat(idValue);
    return value;
}
function outputById(outputID, area) {
    const output = document.getElementById(outputID)
    output.innerText = area;
}