var textInput = document.getElementById('input-text');
var outInput = document.getElementById('output');
var btnCopiar = document.getElementById('btn-copiar');

function criptografar(){
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    output.value = resultCripto;
    texto = "";

        document.getElementById('output').innerHTML = resultCripto;
        textInput = "";
    }

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = resultDescripto;
}

async function copiar() {
    let textoCop = document.getElementById('output');
    try {
        // Copia o texto para a área de transferência
        await navigator.clipboard.writeText(textoCop.value);
        alert('Texto copiado para a área de transferência!');
    } catch (err) {
        alert('Falha ao copiar o texto.');
    }
}

document.getElementById('btn-copiar').addEventListener('click', copiar);

