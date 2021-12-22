function calcu(clicked_id) {
    // console.log(clicked_id);
    var newValue = document.getElementById("press-1").value += clicked_id;
    // console.log(newValue);
}

function clearFnc() {
    document.getElementById('press-1').value = "";
}

function squareRoot() {
    var rootValue = document.getElementById('press-1').value;
    var finalValue = Math.sqrt(Number(rootValue));
    document.getElementById('press-1').value = finalValue;
}

function backspace() {
    var popValue = (document.getElementById('press-1').value);
    var finaValue = (popValue.length) - 1;
    document.getElementById('press-1').value = popValue.substr(0, finaValue);
}


function final(clicked_id1) {
    var getValue = document.getElementById('press-1').value;
    var finalValue = eval(getValue);
    var roundedValue = finalValue.toFixed(4);
    // console.log("finalValue"+roundedValue);
    document.getElementById('press-1').value = roundedValue;
}