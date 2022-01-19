calcularSomatóriaDivisiveisPor3ou5 = () => {
    var valorRecebido = document.getElementById('valorRecebido').value;
    if (valorRecebido > 0) {
        divisiveis = new Array();
        for (let contador = 3; contador < valorRecebido; contador++) {
            if (contador % 5 == 0 || contador % 3 == 0)
                divisiveis.push(contador);
        }

        somatoria = 0;
        divisiveis.forEach(valor => {
            somatoria += valor;
        });
        alert('A somatória é: '+ somatoria);
    }
    else {
        alert('Valor Incompatível');
    }
}
