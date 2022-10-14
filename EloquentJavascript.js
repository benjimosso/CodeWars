function factorial(numero) {
    
    if (numero == 0) {
        console.log(numero)
        return 1
    } else {
        console.log(numero)
        return factorial(numero - 1) * numero;
    }
}


console.log(factorial(8));