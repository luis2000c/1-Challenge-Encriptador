var encriptar = document.querySelector(".btn-encriptar");
var desencriptar = document.querySelector(".btn-desencriptar");
var copiar = document.querySelector(".copiar");


function encriptarTexto(){

    document.getElementById("mensajes").style.display = "none";
    document.getElementById("imagen-muneco").style.backgroundImage = "none";
    document.getElementById("btn-copiar").style.display = "block";
    var texto = document.querySelector(".text-area").value
    navigator.clipboard.writeText(texto)

    /*Encriptando*/
    var nuevoTexto = texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat")
    navigator.clipboard.readText().then(texto=>{
        document.querySelector(".mensaje").value = nuevoTexto
    })
}

function desencriptarTexto(){
    
    var textoDesencriptar = document.querySelector(".text-area").value;
    navigator.clipboard.writeText(textoDesencriptar);

    /*Desencriptar*/
    var textoDesencriptado = textoDesencriptar.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u")
    
    /*Retirar Elementos*/
    document.getElementById("mensajes").style.display = "none";
    document.getElementById("imagen-muneco").style.backgroundImage = "none";
    document.getElementById("btn-copiar").style.display = "block";
    /* */
    document.querySelector(".mensaje").value = textoDesencriptado
    
    
}

function copiarTexto(){
    var textoCopiado = document.getElementById("imagen-muneco");
    textoCopiado.select();
    document.execCommand('copy');
}
encriptar.onclick = encriptarTexto
desencriptar.onclick = desencriptarTexto
copiar.onclick = copiarTexto
