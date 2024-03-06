
//alert("Hola mundo");

//Declaración de variables

let letterA = "ai";
let letterE = "enter";
let letterI = "imes";
let letterO = "ober";
let letterU = "ufat";




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
    setStyle.style.backgroundImage = none;

    setStyle.style.backgroundColor = gray;

    msgIngresado.value= "55555";

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


function testButton(){
    msgIngresado.value = "";

}
    

function copyText(){
    let portapapeles = document.getElementById("textOutput").value;
    alert(`Mensaje copiado: ${portapapeles}`);

}

function reloadSite(){
    document.location.reload()
}

