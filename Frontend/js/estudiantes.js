// Registrar Estudiante en el Departamento

// Registrar Estudiante
async function registrarEstudiante(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombreEst").value.trim();
    const tipoDocumento = document.getElementById("tipoDocEst").value;
    const numeroDocumento = document.getElementById("numDocEst").value.trim();

    // Validación básica del frontend
    if (nombre.length < 10 || nombre.length > 100) {
        alert("El nombre debe tener entre 10 y 100 caracteres");
        return;
    }

    if (!/^\d{8,11}$/.test(numeroDocumento)) {
        alert("Número de documento inválido. Debe tener entre 8 y 11 dígitos");
        return;
    }
    const existe = estudiantes.some(e => e.tipoDoc === tipoDoc && e.numeroDocumento === numeroDocumento);
    if(existe){
      alert("Este estudiante ya está registrado");
      return;
    }
    estudiantes.push({nombre,tipoDoc,numeroDocumento});
    alert("El estudiante se registró con éxito")

    document.getElementById("nombreEst").value = "";
    document.getElementById("numDocEst").value = "";
    /*const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
      "nombre": document.getElementById("nombreEst").value,
      "tipoDocumento": document.getElementById("tipoDocEst").value,
      "numeroDocumento": document.getElementById("numDocEst").value
    });
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    fetch("https://ejemplofirebase.netlify.app/.netlify/functions/estudiantes", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert("Estudiante registrado exitosamente");
      })
      .catch((error) => {
        console.error(error);
        alert("Error al registrar estudiante");
      });*/
  }
  
  // Consultar Estudiante en el Departamento
  function consultarEstudiante(event) {
    event.preventDefault();
    const tipoDocumento = document.getElementById("tipoDocConsulta").value;
    const numeroDocumento = document.getElementById("numDocConsulta").value.trim();

    const estudiante = estudiantes.find(e => 
        e.tipoDoc === tipoDocumento && 
        e.numeroDocumento === numeroDocumento
    );
    document.getElementById("NomEst").value = estudiante ? estudiante.nombre : "No encontrado";

    /*fetch(`https://tu-sitio.netlify.app/.netlify/functions/estudiantes?tipoDoc=${tipoDoc}&numDoc=${numDoc}`)
      .then((response) => response.json())
      .then((result) => {
        document.getElementById("NomEst").value = result.nombre || "No encontrado";
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("NomEst").value = "Error al consultar";
      });*/
  }
  
  // Buscar Estudiante para Modificar
  function buscarEstudiante(event) {
    event.preventDefault();
    
    const tipoDoc = document.getElementById("tipoDocMod").value;
    const numeroDoc = document.getElementById("numDocMod").value;
    const estudiante = estudiantes.find(e => 
        e.tipoDoc === tipoDoc && 
        e.numeroDocumento === numeroDoc
    );
    if (estudiante) {
        document.getElementById("NuevoNombre").value = estudiante.nombre;
        document.getElementById("nuevoTipoDoc").value = estudiante.tipoDoc;
    } else {
        alert("Estudiante no encontrado");
    }
    /*fetch(`https://tu-sitio.netlify.app/.netlify/functions/estudiantes?tipoDoc=${tipoDoc}&numDoc=${numDoc}`)
      .then((response) => response.json())
      .then((result) => {
        document.getElementById("NuevoNombre").value = result.nombre || "";
      })
      .catch((error) => {
        console.error(error);
        alert("Error al buscar estudiante");
      });*/
  }
  
  // Modificar Estudiante
  function modificarEstudiante(event) {
    event.preventDefault();
    const tipoDocumento = document.getElementById("tipoDocMod").value;
    const numeroDocumento = document.getElementById("numDocMod").value.trim();
    const nuevoNombre = document.getElementById("NuevoNombre").value.trim();
    const nuevoTipoDoc = document.getElementById("nuevoTipoDoc").value;

    // Validación del frontend
    if (nuevoNombre && (nuevoNombre.length < 10 || nuevoNombre.length > 100)) {
        alert("El nuevo nombre debe tener entre 10 y 100 caracteres");
        return;
    }

    const index = estudiantes.findIndex(e => 
        e.tipoDoc === tipoDocumento && 
        e.numeroDocumento === numeroDocumento
    );

    if (index !== -1) {
        estudiantes[index].nombre = nuevoNombre;
        estudiantes[index].tipoDoc = nuevoTipoDoc;
        alert("Estudiante modificado exitosamente");
    } else {
        alert("Estudiante no encontrado");
    }
    document.getElementById("numDocMod").value = "";
    document.getElementById("NuevoNombre").value = "";
    
    /*const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
      "tipoDocumento": document.getElementById("tipoDocMod").value,
      "numeroDocumento": document.getElementById("numDocMod").value,
      "nuevoNombre": document.getElementById("NuevoNombre").value,
      "nuevoTipoDoc": document.getElementById("nuevoTipoDoc").value
    });
    let requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    fetch("https://tu-sitio.netlify.app/.netlify/functions/estudiantes", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert("Estudiante modificado exitosamente");
      })
      .catch((error) => {
        console.error(error);
        alert("Error al modificar estudiante");
      });*/
  }
  // Consultar Asignatura (nueva función)
function consultarAsignatura(event) {
  event.preventDefault();
  
  const codigo = document.getElementById("CodigoAsign").value;
  const grupo = document.getElementById("GrupoAsign").value;
  const semestre = document.getElementById("SemestreAsign").value;

  const asignatura = asignaturas.find(a => 
        a.codigo === codigo && 
        a.grupo === grupo && 
        a.semestre === parseInt(semestre)
  );

  document.getElementById("NombreAsign").value = asignatura ? asignatura.nombre : "No encontrada";
  /*fetch(`https://tu-sitio.netlify.app/.netlify/functions/asignaturas?codigo=${codigo}&grupo=${grupo}&semestre=${semestre}`)
      .then(response => response.json())
      .then(data => {
          document.getElementById("NombreAsign").value = data.nombre || "No encontrada";
      })
      .catch(error => {
          console.error("Error:", error);
          document.getElementById("NombreAsign").value = "Error al consultar";
      });*/
}

// Agregar Estudiante a Asignatura 
function agregarEstudianteAsignatura(event) {
  event.preventDefault();
  
  const codigoEst = document.getElementById("CodEst").value;
  const tipoDoc = document.getElementById("TipoDoc").value;
  const codigoAsign = document.getElementById("CodigoAsign").value;
  const grupoAsign = document.getElementById("GrupoAsign").value;

  const estudiante = estudiantes.find(e => 
        e.numeroDocumento === codigoEstudiante && 
        e.tipoDoc === tipoDocumento
    );
    
    const asignatura = asignaturas.find(a => 
        a.codigo === codigoAsign && 
        a.grupo === grupoAsign
    );

    if (!estudiante || !asignatura) {
        alert("Estudiante o asignatura no encontrados");
        return;
    }

    const yaRegistrado = estudiantesenAsignaturas.some(ea => 
        ea.codigoEstudiante === codigoEst && 
        ea.tipoDocumento === tipoDoc &&
        ea.codigoAsignatura === codigoAsign &&
        ea.grupo === grupoAsign
    );

    if (yaRegistrado) {
        alert("El estudiante ya está registrado en esta asignatura");
        return;
    }

    estudiantesenAsignaturas.push({
        codigoEst,
        tipoDoc,
        codigoAsign,
        grupo: grupoAsign
    });
    
    alert("Estudiante agregado a la asignatura exitosamente");
    document.getElementById("CodEst").value = "";
  /*fetch("https://tu-sitio.netlify.app/.netlify/functions/asignaturas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          codigoEstudiante: codigoEst,
          tipoDocumento: tipoDoc,
          codigoAsignatura: codigoAsign,
          grupo: grupoAsign
      })
  })
  .then(response => response.text())
  .then(result => {
      alert("Estudiante agregado a la asignatura");
      console.log(result);
  })
  .catch(error => {
      console.error("Error:", error);
      alert("Error al agregar estudiante");
  });*/
}