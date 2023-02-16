var number = 0;
var increment = 1;

document.addEventListener("keydown", e=>{
    if(e.key === "+" || e.key === " " || e.key === "=") number += increment;
    else if(e.key === "-") number -= increment;

    document.getElementById('displayText').innerHTML = number;
    document.title = 'Counter: ' + number;
});
