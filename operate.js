// Funzione che prende in input gli operandi e svolge l'operazione richiesta:

function operate(numberOne, numberTwo, operation) {
    
    if (operation === "+") {
        return numberOne + numberTwo;
    }
    if (operation === "-") {
        return numberOne - numberTwo;
    }
    if (operation === "x") {
        return numberOne * numberTwo;
    }
    if (operation === "÷") {
        return numberOne / numberTwo;
    }
    if (typeof numberOne == String || typeof numberTwo == String) {
        return null;        
    }
    else {
        return null;
    }
    //throw Error(`Unknown operation '${operation}'`);
}

module.exports = operate;
