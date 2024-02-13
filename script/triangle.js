/**to get triangle area 
 * 1. get  base value 
 * 2. get hight value 
 * 3. value type convert to float from string
 * 4. calculate area by using formula 
 * 5. return the value
 */
function TriangleAreaCalculate() {
    // input the base value 
    const triangleBase = document.getElementById('triangle-base');
    const BaseValue = triangleBase.value;
    const base = parseFloat(BaseValue);
    // console.log(base);

    // input the hight value 
    const triangleHight = document.getElementById('triangle-hight');
    const HightValue = triangleHight.value;
    const hight = parseFloat(HightValue);
    // console.log(hight);
 
    // calculate area 
    // formula : 0.5 X base X hight 
    const area = 0.5 * base * hight ;
    // console.log(area);

    // Return the area value 
    const areaValue = document.getElementById('triangle-area');
    areaValue.innerText = area ;

};
