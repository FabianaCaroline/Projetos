let chaves = { 
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
};

let textarea = document.querySelector('#campo-busca');
let btnCriptografar = document.querySelector('.btn-criptografar');
let btnDescriptografar = document.querySelector('.btn-descriptografar');
let campoResultado = document.querySelector('.campo-resultado');
let btnCopiar = document.querySelector('.campo-resultado .botao');
let placeholderResultado = document.querySelector('.placeholder-resultado');
let resultado = document.querySelector('.texto-resultado');

let texto = "";
let palavra = "";

btnCriptografar.onclick = function (){
    texto = textarea.value;
    palavra = "";

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

btnDescriptografar.onclick = function (){
    texto = textarea.value;

    if (texto) {

        for (const i in chaves) {
            texto = texto.replaceAll(chaves[i], i);
        }
            
        placeholderResultado.style.display = 'none';
        campoResultado.style = 'display: flex;' + 'flex-direction: column;' + 'justify-content: space-between;';
        resultado.textContent = texto;
        btnCopiar.style.display = 'inline-block';

    } else{
        placeholderResultado.style.display = 'block';
    }

};

btnCopiar.onclick = function () {
    navigator.clipboard.writeText(resultado.textContent).then(() => {
        /* clipboard successfully set */
      }, () => {
        console.log("Erro de gravação na área de transferência");
      });

}