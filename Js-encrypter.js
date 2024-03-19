
//alert("Hola mundo");

//Declaración de variables

let letterA = "ai";
let letterE = "enter";
let letterI = "imes";
let letterO = "ober";
let letterU = "ufat";

const matrizCodigo = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];


//Declaración de formulas

function captureMsg(){
    let msgIngresado = document.getElementById("textInput").value;
    msgIngresado.toLowerCase();

    sendTextEncrypter(msgIngresado);
    //let frameText = document.querySelector("div");
    //frameText.style.backgroundColor = gray;

}

function sendTextEncrypter(msgIngresado){

    let msgOutput = document.getElementById("textOutput");
    msgOutput.value=msgIngresado;


    let setStyle = document.getElementsById("containerOutput");
    //setStyle.style.backgroundColor = none;

    setStyle.Style.backgroundColor = gray;

    //msgIngresado.value= "55555";

}

function encrypter(){
    msgIngresado = msgIngresado.tolowerCase();

    for(let x in msgIngresado){
        if(msgIngresado.includes("a")){
            msgIngresado.replaceAll(letterA);
        }
        if(msgIngresado.includes("e")){
            msgIngresado.replaceAll(letterE);
        }
        if(msgIngresado.includes("i")){
            msgIngresado.replaceAll(letterI);
        }
        if(msgIngresado.includes("o")){
            msgIngresado.replaceAll(letterO);
        }
        if(msgIngresado.includes("u")){
            msgIngresado.replaceAll(letterU);
        }
    }
}



    

//---------Función para copiar texto al portapapales----------
function copyText(){
    let portapapeles = document.getElementById("textOutput").value;
    alert(`Mensaje copiado: ${portapapeles}`);

}

//---------Función para reiniciar pagina completa----------
function reloadSite(){
    document.location.reload()
}

function testButton(){
    let msgOutput = document.getElementById("textOutput");
    msgOutput.value="";
    //msgIngresado.value = "";

}

