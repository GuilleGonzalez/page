const charInfo = { "0": "-----",  "1": ".----",  "2": "..---",  "3": "...--",  "4": "....-",  "5": ".....",  "6": "-....",  "7": "--...",  "8": "---..",  "9": "----.", "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--", "z": "--..", " ": "/", ".": ".-.-.-", "'": ".----.", "(": "-.--.", ":": "---...", "+": ".-.-.", "\"": ".-..-.", ",": "--..--", "!": "-.-.--", ")": "-.--.-", ";": "-.-.-.", "-": "-....-", "$": "...-..-", "?": "..--..", "/": "-..-.", "&": ".-...", "=": "-...-", "_": "..--.-", "@": ".--.-."}
const inverseCharInfo = { "-----": "0", ".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9", ".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e", "..-.": "f", "--.": "g", "....": "h", "..": "i", ".---": "j", "-.-": "k", ".-..": "l", "--": "m", "-.": "n", "---": "o", ".--.": "p", "--.-": "q", ".-.": "r", "...": "s", "-": "t", "..-": "u", "...-": "v", ".--": "w", "-..-": "x", "-.--": "y", "--..": "z", "/": " ", ".-.-.-": ".", ".----.": "'", "-.--.": "(", "---...": ":", ".-.-.": "+", ".-..-.": "\"", "--..--": ",", "-.-.--": "!", "-.--.-": ")", "-.-.-.": ";", "-....-": "-", "...-..-": "$", "..--..": "?", "-..-.": "/", ".-...": "&", "-...-": "=", "..--.-": "_", ".--.-.": "@"}

var encode = true;
var savedInput = '';
var oldSavedInput = '';
const inputText = document.getElementById('inputTextArea');

function findCode(){
    var inputedText = inputText.value.toLowerCase().replace('\n', ' ');
    var outputText = '';     
    
    if(encode)
    {        
        for (var i = 0; i < inputedText.length; i++)
            if(charInfo[inputedText[i]] !== undefined)
                outputText += charInfo[inputedText[i]] + ' ';
    }
    else
    {   
        inputedText = (' ' + inputedText + ' ');
        var stringToDecode = inputedText.split(' ');
        for (var i = 0; i < stringToDecode.length; i++)
            if(inverseCharInfo[stringToDecode[i]] !== undefined)
                outputText += inverseCharInfo[stringToDecode[i]];  
    }

    if(document.getElementById('outputText').innerHTML !== outputText.toUpperCase())
        document.getElementById('outputText').innerHTML = outputText.toUpperCase();
}

function autoGrow(element)
{
    element.style.height = '5px';
    element.style.height = ((element.scrollHeight > 210)? element.scrollHeight: '210') + 'px';
}

function changeCodingType()
{
    encode = document.getElementById('encode').checked? true: false;
    
    oldSavedInput = savedInput;
    savedInput = document.getElementById('inputTextArea').value;
    document.getElementById('inputTextArea').value = oldSavedInput;
    
    findCode();
    autoGrow(inputText);
}

inputText.addEventListener('keyup', findCode);

inputText.addEventListener('keyup', toCAPS);
function toCAPS() { if(encode) document.getElementById('inputTextArea').value = document.getElementById('inputTextArea').value.toUpperCase();}