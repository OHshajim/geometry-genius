/**to get triangle area 
 * 1. get  base value 
 * 2. get hight value 
 * 3. value type convert to float from string
 * 4. calculate area by using formula 
 * 
 * 
 * 
 */
function TriangleAreaCalculate() {
    // input the base value 
    const triangleBase = document.getElementById('triangle-base');
    const BaseValue = triangleBase.value;
    const base = parseFloat(BaseValue);
    console.log(base)

    // input the hight value 
    const triangleHight = document.getElementById('triangle-hight');
    const HightValue = triangleHight.value
    const hight = parseFloat(HightValue)
    console.log(hight);
 


};
