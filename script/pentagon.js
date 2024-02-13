function ellipseAreaCalculate() {
    const major = getValueById('ellipse-major');
    const minor = getValueById('ellipse-minor');
    const area = 3.1426 * major * minor ;
    outputById('ellipse-area',area);
}