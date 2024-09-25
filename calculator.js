function showOnDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = "";
}

function deleteLast() {
    let display = document.getElementById('result').value;
    document.getElementById('result').value = display.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}