function registrarEstudianteDepartamento(event){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();
    let infoEst = JSON.stringify({
        "Nombre" : document.getElementById("nombreEst").value,
        "Tipo_Documento" : document.getElementById("tipoDocEst").value,
        "Codigo" : document.getElementById("numDocEst").value
    });
    let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: infoEst,
        redirect: "follow"
    };
    fetch("https://ejemplofirebase.netlify.app/.netlify/functions/estudiantes",requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
