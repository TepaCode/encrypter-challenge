
//alert("Hola mundo");

//Declaración de variables
let letterA = "ai";
let letterE = "enter";
let letterI = "imes";
let letterO = "ober";
let letterU = "ufat";



function showMsg(){
    let msgIngresado = document.getElementById("textInput").value;
    let msgOutput = document.getElementById("textOutput");

   
    msgOutput.value=msgIngresado;

}

function reloadSite(){
    document.location.reload()
}