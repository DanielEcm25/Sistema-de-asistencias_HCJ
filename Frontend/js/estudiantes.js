//Integrantes: Daniel Contreras y Johan Briceño
function registrarEstudiante(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();
    let raw = JSON.stringify({
        "Nombre" : document.getElementById("nombreEst").value,
        "Tipo_Documento" : document.getElementById("tipoDocEst").value,
        "Codigo" : document.getElementById("numDocEst").value
    });
    let requestOptions = {
        method : "POST",
        headers : myHeaders,
        body : raw,
        redirect : "follow"
    };
    fetch(a,requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
}
function cargar(resultado){
    let transformado = JSON.parse(resultado);
    var salida = "";
    var elemento = "";
    for (let vc in transformado){
        elemento = "<br>Nombre: "+transformado(vc).Nombre;
        elemento = elemento + "<br>Tipo de documento: "+transformado(vc).TipoDoc;
        elemento = elemento + "<br>Código: "+transformado(vc).codigo;
        salida = salida + elemento + "<br><br>"
    }
    document.getElementById("NomEst").innerHTML = salida;
}
function listar(){
    event.preventDefault();
    const requestOptions = {method : "GET", redirect : "follow"};
    fetch(a,requestOptions)
    .then((response)=>response.text())
    .then((result)=>cargar(result))
    .catch((error)=>console.error(error))
}
