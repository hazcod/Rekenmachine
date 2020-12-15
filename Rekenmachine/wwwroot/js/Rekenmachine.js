let input = document.getElementById('input');

function button(obj)
{
    let pushed = obj.innerHTML;

    if (pushed == '=') {
        input.innerHTML = eval(input.innerHTML);
        return;
    }
    
    if (pushed == 'AC') {
        input.innerHTML = '0';
        return;
    }
    
    if (input.innerHTML == '0') {
        input.innerHTML = pushed;
        return;
    }
    
    input.innerHTML += pushed;
}
