document.getElementById('btn').addEventListener('click', function(){
    const firstInput = document.getElementById('fisrt_input').value;
    const firstValue = parseFloat(firstInput);
    const secondtInput = document.getElementById('secont_input').value;
    const secondtValue = parseFloat(secondtInput);
    const result =  0.5 * firstValue * secondtValue;
    
    if(isNaN(result)){
    document.getElementById('result').innerText = '(Invalid)';
    }
    else{
    document.getElementById('result').innerText = result;
    }
})