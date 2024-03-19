//Declaración de variables
let emptyMsg = "No se a escrito un mensage aún!";


//Definición de funciones

//-----------Capturar mensage ingresado por el usuario------------
function captureMsg(){

    let msgIngresado = document.getElementById("textInput").value;
    return msgIngresado;

}

//---------Función para encriptar mensage--------
function encrypter(){

    let inputString = captureMsg();
    inputString = inputString.toLowerCase();

    //alert(`ingresaste: ${inputString}`);  >Texto de testeo de codigo

    let matrizCodigo = [
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
    ];

    for(let x = 0; x < matrizCodigo.length; x++){
        if(inputString.includes(matrizCodigo[x][0])){
            inputString = inputString.replaceAll(matrizCodigo[x][0], matrizCodigo[x][1]);
        }
    }

    //alert(`codificado: ${inputString}`);   >Texto de testeo de codigo
    
    return inputString;
}

//---------Función para desencriptar mensage--------
function unencrypter(){

    let encrypterString = captureMsg();
    encrypterString = encrypterString.toLowerCase();

    //alert(`ingresaste: ${inputString}`);  >Texto de testeo de codigo

    let matrizCodigo = [
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
    ];

    for(let x = 0; x < matrizCodigo.length; x++){
        if(encrypterString.includes(matrizCodigo[x][1])){
            encrypterString = encrypterString.replaceAll(matrizCodigo[x][1], matrizCodigo[x][0]);
        }
    }

    //alert(`codificado: ${inputString}`);   >Texto de testeo de codigo
    
    return encrypterString;
}

//---------Función para mostrar mensage encriptado--------
function setTextEncrypter(){
    
    creatorDiv();


    let encrypterString = encrypter();

    let msgOutput = document.getElementById("textOutput");
    msgOutput.value = encrypterString;

    cleanStyles();

    
}

//---------Función para mostrar mensage desencriptado--------
function setTextUnencrypter(){
    
    let unencrypterString = unencrypter();

    let msgOutput = document.getElementById("textOutput");
    msgOutput.value = unencrypterString;

    cleanStyles();
}

//---------Función para limpiar text area de entrada & borrar imagen de fondo ------
function cleanStyles(){

    let cleanTextInput = document.getElementById("textInput");
    cleanTextInput.value = "";

    let setWhiteOutput = document.getElementById("containerOutput");
    setWhiteOutput.style.backgroundImage = "none";

    let styleButton = document.getElementById("copyButton");
    styleButton.innerHTML = "copiar";
    styleButton.style.backgroundColor = "white";
    styleButton.style.color = "rgb(0, 87, 128)";
}

//---------Crear elementos dentro de sección del encrypter-----------

let controlDiv = 1;

function creatorDiv(){

    while(controlDiv == 1){
        let setSectionContainer = document.getElementById("containerEncrypter");

        let createNewDiv = document.createElement("textarea");
        createNewDiv.setAttribute("class","text__area__output");
        createNewDiv.setAttribute("cols","30");
        createNewDiv.setAttribute("rows","10");
        createNewDiv.setAttribute("id","textOutput");
    
        let createNewButton = document.createElement(`button`);
        createNewButton.innerHTML = "copiar";
        createNewButton.setAttribute("id","copyButton");
        createNewButton.setAttribute(`class`,`button__copy`);
        createNewButton.setAttribute(`onclick`,`copyText()`);
    
        setSectionContainer.appendChild(createNewDiv);
        setSectionContainer.appendChild(createNewButton);

        controlDiv++;
    }
    
}



//----------EXTRAS----------


//---------Función para copiar texto al portapapales----------
function copyText(){
    let portapapeles = document.getElementById("textOutput").value;
    if(portapapeles.length < 1){
        alert(emptyMsg);
    }else{
        navigator.clipboard.writeText(portapapeles);
    
        let buttonText = document.getElementById("copyButton");
        buttonText.textContent = "mensage copiado";
        buttonText.style.backgroundColor = "rgb(0, 87, 128)";
        buttonText.style.color = "white";
    }
}

//---------Función para reiniciar pagina completa----------
function reloadSite(){
    document.location.reload()
}

function testButton(){


    let msgIngresado = document.getElementById("textInput").value;
    if(msgIngresado.length < 1){
        alert("Ingresa un mensage en el campo de texto.")
    }else{
        let ingresando = captureMsg();
        alert(`Ingresaste: ${ingresando}.`);

        let encrypterString = encrypter();

        let msgOutput = document.getElementById("textOutput");
        msgOutput.value = encrypterString;

        alert(`Se a encriptado como: ${encrypterString}.`)
    }

    if (portapapeles.length > 0){
        alert("Tienes un mensage copiado en el portapapeles.")
    }else{
        alert("Prueba con el boton copiar.");
    } 

    

}

