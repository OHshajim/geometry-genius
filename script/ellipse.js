function pentagonAreaCalculate() {
    const perimeter = getValueById('pentagon-perimeter');
    const apothem = getValueById('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    outputById('pentagon-area',area);
}