const inputText = document.getElementById('inputTextArea');

function findCount()
{
    var words = inputText.value.replace(/\n/g, ' ').split(' ');
    words = words.filter(e=>e);
    
    document.getElementById('displayInfo').innerHTML = words.length + ' Words & ' + inputText.value.replace(/\n/g, '').length + ' Characters';
}

inputText.addEventListener('keyup', findCount);
inputText.addEventListener('paste', findCount);