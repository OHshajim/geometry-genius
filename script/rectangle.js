/** to get rectangle area  manually
 *   1. get  width value 
 *   2. get length value 
 *   3. value type convert to float from string
 *   4. calculate area by using formula 
 *   5. return the value
 */

// a function for area 
function RectangleAreaCalculate() {
    // get  width value 
    const rectangleWidth = document.getElementById('rectangle-width');
    const WidthValue = rectangleWidth.value;
    const width = parseFloat(WidthValue);
    console.log(width);

    // get length value 
    const rectangleLength = document.getElementById('rectangle-length');
    const lengthValue = rectangleLength.value;
    const length = parseFloat(lengthValue);
    console.log(length);
    
    // calculate area by using formula
    const area = width * length;

    // return the value
    const areaValue = document.getElementById('rectangle-area');
    areaValue.innerText = area;

}