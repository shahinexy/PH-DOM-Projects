document.getElementById('btn').addEventListener('click', function(){
    const firstInput = document.getElementById('base').value;
    const firstValue = parseFloat(firstInput);
    const secondtInput = document.getElementById('height').value;
    const secondtValue = parseFloat(secondtInput);
    const result =  0.5 * firstValue * secondtValue;
    
    if(isNaN(result)){
    document.getElementById('result').innerText = '(Invalid)';
    }
    else{
    document.getElementById('result').innerText = result;
    }
})

// Another way
// If you have to done this same think multiple time this is a good way to done this.
function getFirstvallue(fisrtinput){
    const firstInput = document.getElementById(fisrtinput).value;
    const firstValue = parseFloat(firstInput);
    return firstValue;
}

function getsecondvallue(secondinput){
    const secondInput = document.getElementById(secondinput).value;
    const secondtValue = parseFloat(secondInput);
    return secondtValue;
}
function getResult(resultInput){
    const result = document.getElementById(resultInput).innerText;    
    return result;
}
