// ellipse area calculate by help og others function .

function ellipseAreaCalculate() {

     // call a function to get value 
    const major = getValueById('ellipse-major');
    const minor = getValueById('ellipse-minor');

    // calculate area 
    const area = 3.1426 * major * minor ;

    // display value by calling function 
    outputById('ellipse-area',area);
}