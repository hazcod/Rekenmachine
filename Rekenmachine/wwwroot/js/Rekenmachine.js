let input = document.getElementById('input');

function button(element)
{
    let action = element.getAttribute('data-action');

    if (action === '=') {
        input.value = eval(input.value);
        return;
    }
    
    if (action === 'AC') {
        input.value = '0';
        return;
    }
    
    let numberValue = Number(action);
    
    if (input.value === 0) {
        input.value = numberValue;
        return;
    }
    
    input.value += numberValue;
}
