document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const botones = document.getElementById('botones');
    let operacionActual = '';
    let operadorAnterior = '';
    let resultadoMostrado = false;

    botones.addEventListener('click', function (e) {
        const boton = e.target;
        const valor = boton.textContent;

        if (boton.classList.contains('numero') || boton.classList.contains('decimal')) {
            if (resultadoMostrado) {
                operacionActual = valor;
                resultadoMostrado = false;
            } else {
                operacionActual += valor;
            }
            display.value = operacionActual;
        } else if (boton.classList.contains('operador')) {
            if (valor === 'AC') {
                operacionActual = '';
                operadorAnterior = '';
                display.value = '';
            } else if (valor === 'X') {
                operacionActual = operacionActual.slice(0, -1);
                display.value = operacionActual;
            } else {
                if (operacionActual === '' && valor === '-') {
                    operacionActual = '-';
                    display.value = operacionActual;
                } else if (operacionActual !== '' && !isNaN(operacionActual.slice(-1))) {
                    operacionActual += valor;
                    display.value = operacionActual;
                }
            }
            resultadoMostrado = false;
        } else if (boton.classList.contains('igual')) {
            try {
                const resultado = eval(operacionActual);
                display.value = resultado;
                operacionActual = resultado.toString();
                resultadoMostrado = true;
            } catch {
                display.value = 'Error';
                operacionActual = '';
            }
        }
    });
});
