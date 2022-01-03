var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var resultField = document.getElementById('resultField');

var form = document.getElementById('xIsWhatPercentOfY');

form.addEventListener('submit', function(event) {
    if (!num1.value || !num2.value) {
        alert("Please enter values in field");
    } else {
        var x = parseFloat(num1.value);
        var y = parseFloat(num2.value);

        var result = x / y;
        var percent = result * 100;

        resultField.innerText = "Result: " + percent + " %";
        event.preventDefault();
    }
});