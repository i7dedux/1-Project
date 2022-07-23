const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clears]');
const previous_Operand = document.querySelector('.previous-operand');
const current_Operand = document.querySelector('.current-operand');
class Calc {
    constructor(prev, current) {
            this.prev = prev;
            this.current = current;
            this.currentOperand = "";
            this.previousOperand = "";
            this.operation = undefined;
        }
        // function to clear all the data in output (written as AC)
    clear() {
            this.previousOperand = "";
            this.currentOperand = "";
            this.operation = undefined;
            this.updateDisplay();
        }
        // this function is going to save not to have next dot
    append(number) {
            if (number == "." && this.currentOperand.includes(".")) {
                return;
            }
            this.currentOperand += number;
            this.updateDisplay();
        }
        // function erase one num back
    del() {
            this.currentOperand = this.currentOperand.toString().slice(0, -1);
            this.updateDisplay();
        }
        // choosing the operation in the next step in order to proceed between numbers
    getOp(operation) {
        if (this.operation != null) {
            this.operate();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
        this.updateDisplay();
    }
    operate() {
        let computation = "";
        if (this.currentOperand == "" || this.previousOperand == "") {
            return;
        }
        this.currentOperand = parseFloat(this.currentOperand);
        this.previousOperand = parseFloat(this.previousOperand);
        switch (this.operation) {
            case "+":
                computation = this.previousOperand + this.currentOperand;
                break;
            case "-":
                computation = this.previousOperand - this.currentOperand;
                break;
            case "/":
                computation = this.previousOperand / this.currentOperand;
                break;
            case "*":
                computation = this.previousOperand * this.currentOperand;
                break;
            default:
                null;
        }
        this.currentOperand = computation;
        this.previousOperand = "";
        this.operation = undefined;
        this.updateDisplay();
    }
    updateDisplay() {
        this.current.textContent = this.currentOperand.toString();
        if (this.operation != null) {
            this.prev.textContent = `${this.previousOperand} ${this.operation}`;
            return;
        }
        this.prev.textContent = this.previousOperand.toString();
    }
}


let newOp = new Calc(previous_Operand, current_Operand);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        newOp.append(button.textContent);
    });
});
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        newOp.getOp(button.textContent);
    });
});
equalsButton.addEventListener('click', () => {
    newOp.operate();
});
deleteButton.addEventListener('click', () => {
    newOp.del();
});
clearButton.addEventListener('click', () => {
    newOp.clear();
});