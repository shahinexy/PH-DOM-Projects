document.getElementById('btn').addEventListener('click', function () {
    const firstInput = document.getElementById('base').value;
    const firstValue = parseFloat(firstInput);
    const secondtInput = document.getElementById('height').value;
    const secondtValue = parseFloat(secondtInput);
    const result = 0.5 * firstValue * secondtValue;

    if (isNaN(result)) {
        document.getElementById('result').innerText = '(Invalid)';
    }
    else {
        document.getElementById('result').innerText = result;
    }
})

// Another way
// If you have to done this same think multiple time this is a good way to done this.
function getValue(input) {
    const firstInput = document.getElementById(input).value;
    const value = parseFloat(firstInput);
    return value;
}
function setResult(resultInput, equation) {
    let result = document.getElementById(resultInput);
    result.innerText = equation;
}

// rectangle
document.getElementById('rectangle_btn').addEventListener('click', function () {
    const firstInput = getValue('fisrt_input');
    const secondtInput = getValue('second_input');
    const equation = firstInput * secondtInput;

    if (isNaN(equation)) {
        setResult('area_result', '(Invalid)');;
    }
    else {
        setResult('area_result', equation);;
    }
})

// Parallelogram
document.getElementById('Parallelogram_btn').addEventListener('click', function () {
    const firstInput = getValue('Parallelogram_fisrt_input');
    const secondtInput = getValue('Parallelogram_secont_input');
    const equation = firstInput * secondtInput;
    if (isNaN(equation)) {
        setResult('parallelogram_area_result', '(Invalid)');;
    }
    else {
        setResult('parallelogram_area_result', equation);;
    }
})

// rhombus
document.getElementById('rhombus_btn').addEventListener('click', function () {
    const firstInput = getValue('rhombus_fisrt_input');
    const secondtInput = getValue('rhombus_secont_input');
    const equation = 0.5 * firstInput * secondtInput;
    if (isNaN(equation)) {
        setResult('rhombus_area_result', '(Invalid)');;
    }
    else {
        setResult('rhombus_area_result', equation);;
    }
})

// pentagon
document.getElementById('pentagon_btn').addEventListener('click', function () {
    const firstInput = getValue('pentagon_fisrt_input');
    const secondtInput = getValue('pentagon_secont_input');
    const equation = 0.5 * firstInput * secondtInput;
    if (isNaN(equation)) {
        setResult('pentagon_area_result', '(Invalid)');;
    }
    else {
        setResult('pentagon_area_result', equation);;
    }
})

// ellipse
document.getElementById('ellipse_btn').addEventListener('click', function () {
    const firstInput = getValue('ellipse_fisrt_input');
    const secondtInput = getValue('ellipse_secont_input');
    const equation = Math.PI * firstInput * secondtInput;
    if (isNaN(equation)) {
        setResult('ellipse_area_result', '(Invalid)');;
    }
    else {
        setResult('ellipse_area_result', equation);;
    }
})
