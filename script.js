var encriptar = document.querySelector(".btn-encriptar");
var desencriptar = document.querySelector(".btn-desencriptar");
var copiar = document.querySelector(".copiar");

var nuevoTexto = "";
function encriptarTexto(){

    document.getElementById("mensajes").style.display = "none";
    document.getElementById("imagen-muneco").style.backgroundImage = "none";
    document.getElementById("btn-copiar").style.display = "block";
    var texto = document.querySelector(".text-area").value
    navigator.clipboard.writeText(texto)

    /*Encriptando*/
    nuevoTexto = texto.replace("e","enter").replace("i","imes").replace("a","ai").replace("o","ober").replace("u","ufat")
    navigator.clipboard.readText().then(texto=>{
        document.querySelector(".mensaje").value = nuevoTexto
    })
}

function desencriptarTexto(){
    var contMensajeDesencriptado = nuevoTexto.replace("enter","e").replace("imes","i").replace("ai","a").replace("ober","o").replace("ufat","u")

    document.querySelector(".mensaje").value = contMensajeDesencriptado
}

function copiarTexto(){
    var textoCopiado = document.getElementById("imagen-muneco");
    textoCopiado.select();
    document.execCommand('copy');
}
encriptar.onclick = encriptarTexto
desencriptar.onclick = desencriptarTexto
copiar.onclick = copiarTexto
