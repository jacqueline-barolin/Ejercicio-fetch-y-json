// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(dataArray) {

  container.innerHTML = "Estudiantes encontrados:"
  let contador = 1;
  // El for itera sobre los elementos del array
  for (let e of dataArray) {
    container.innerHTML += `<p>${contador}- ${e.name} ${e.lastname}</p>`; 
    contador++;
  }
}
// Escribe el código necesario para realizar el fetch al archivo con los datos y mostrar los estudiantes con la función showData 



function GetEstudiantes() {
  fetch(DATA_URL, {
    method: "GET"
  })
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {
    showData(data.students);
  })
  .catch(function(error) {
    console.error('Ocurrio un error', error);
  });
}
GetEstudiantes();