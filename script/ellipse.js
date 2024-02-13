// pentagon Area Calculate  by help og others function .

function pentagonAreaCalculate() {

    // call a function to get value 
    const perimeter = getValueById('pentagon-perimeter');
    const apothem = getValueById('pentagon-apothem');

    // calculate area 
    const area = 0.5 * perimeter * apothem;

    // display value by calling function 
    outputById('pentagon-area',area);
};