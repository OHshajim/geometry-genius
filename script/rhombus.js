function rhombusAreaCalculate() {
    const d1 = getValueById('rhombus-d1'); // function called
    const d2 = getValueById('rhombus-d2'); 

    // calculate area 
    const area = 0.5 * d1 * d2;

    // display the value by function
    outputById('rhombus-area', area) 
};
// a function to get element by id and return the value . 
function getValueById(getId) {
    const id = document.getElementById(getId);
    const idValue = id.value;
    const value = parseFloat(idValue);
    return value;
};
// a function to give value and display value .
function outputById(outputID, area) {
    const output = document.getElementById(outputID)
    output.innerText = area;
};