/**this function for get area of parallelogram
 * 1. get hight and base 
 * 2. value replace by float number 
 * 3. calculate by using formula 
 * 4. return value 
 */

function ParallelogramAreaCalculate() {
    //  get hight and base 

    const ParallelogramBase = document.getElementById('parallelogram-base');
    const baseValue = ParallelogramBase.value;
    const base = parseFloat(baseValue);
    // console.log(base);

    const ParallelogramHight = document.getElementById('parallelogram-hight');
    const HightValue = ParallelogramHight.value;
    const hight = parseFloat(HightValue);
    // console.log(hight);


    // calculate by using formula 
    const area =base * hight;

    // return value 
    const areaValue = document.getElementById('parallelogram-area');
    areaValue.innerText = area;
};
