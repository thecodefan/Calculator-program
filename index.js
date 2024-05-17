const display = document.getElementById("display");

function appendToDisplay(input) {
    const currentDisplay = display.value;
    const lastChar = currentDisplay.charAt(currentDisplay.length - 1);

    // prevent starting with a symbol
    if (currentDisplay.length === 0 && ['+', '-', '*', '/', '.'].includes(input)) {
        return;
    }

    // prevent \ from being added at all
    if (input === '\\') {
        return;
    }

    // prevent .,+,- from being used twice in a row
    if (['.', '+', '-'].includes(input) && lastChar === input) {
        return;
    }

    // allow * to be used multiple times in a row, otherwise prevent consecutive operators
    if (['+', '-', '*', '/', '.'].includes(lastChar) && ['+', '-', '*', '/', '.'].includes(input)) {
        if (input !== '*') {
            return;
        }
    }

    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        if (display.value.trim() === "") {
            throw new Error("Empty input");
        }
        // safely evaluate the expression
        display.value = new Function('return ' + display.value)();
    } catch (error) {
        display.value = "error";
    }
}