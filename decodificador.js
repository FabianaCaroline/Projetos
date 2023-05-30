let chaves = { 
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
};

let textarea = document.querySelector('#campo-busca');
let btnCriptografar = document.querySelector('.btn-criptografar');
let campoResultado = document.querySelector('.campo-resultado');
let btnCopiar = document.querySelector('.campo-resultado .botao');
let placeholderResultado = document.querySelector('.placeholder-resultado');
let resultado = document.querySelector('.texto-resultado');

let texto = "";
let palavra = "";

btnCriptografar.onclick = function (event){
    texto = textarea.value;

    if (texto) {
        for (let i = 0; i < texto.length; i++) {
            if (chaves[texto[i]]) {
                palavra += chaves[texto[i]]
            } else{
                palavra += texto[i];
            }
            
        }
            
        placeholderResultado.style.display = 'none';
        campoResultado.style = 'display: flex;' + 'flex-direction: column;' + 'justify-content: space-between;';
        resultado.textContent = palavra;
        btnCopiar.style.display = 'inline-block';

    } else{
        placeholderResultado.style.display = 'block';
    }

};
