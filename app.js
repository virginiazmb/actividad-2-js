// Obtener elementos del DOM
const form = document.getElementById('actividad-form');
const nombreInput = document.getElementById('nombre');
const descripcionInput = document.getElementById('descripcion');
const actividadesList = document.getElementById('actividades-list');

// Arreglo para almacenar las actividades
const actividades = [];

// Función para agregar una nueva actividad
function agregarActividad(event) {
event.preventDefault();

const nombre = nombreInput.value;
const descripcion = descripcionInput.value;

    if (nombre && descripcion) {
        const actividad = { nombre, descripcion };
        actividades.push(actividad);
            actualizarLista();
            limpiarFormulario();
    }
}

// Función para actualizar la lista de actividades
function actualizarLista() {
actividadesList.innerHTML = '';

    actividades.forEach((actividad, indice) => {
    const li = document.createElement('li');

    const nombreSpan = document.createElement('span');
    nombreSpan.textContent = `Nombre: ${actividad.nombre}`;

    const descripcionSpan = document.createElement('p');
    descripcionSpan.textContent = `Descripción: ${actividad.descripcion}`;

    const modificarBtn = document.createElement('button');
    modificarBtn.textContent = 'Modificar';
    modificarBtn.addEventListener('click', () => modificarActividad(indice));

    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.addEventListener('click', () => eliminarActividad(indice));

    li.appendChild(nombreSpan);
    li.appendChild(descripcionSpan);
    li.appendChild(modificarBtn);
    li.appendChild(eliminarBtn);

    actividadesList.appendChild(li);
    });
}

// Función para limpiar el formulario
function limpiarFormulario() {
    nombreInput.value = '';
    descripcionInput.value = '';
}

// Función para modificar una actividad
function modificarActividad(indice) {
    const actividad = actividades[indice];

    const nuevoNombre = prompt('Ingrese el nuevo nombre:', actividad.nombre);
    const nuevaDescripcion = prompt('Ingrese la nueva descripción:', actividad.descripcion);

    if (nuevoNombre !== null && nuevaDescripcion !== null) {
        actividad.nombre = nuevoNombre;
        actividad.descripcion = nuevaDescripcion;
            actualizarLista();
    }
}

// Función para eliminar una actividad
function eliminarActividad(indice) {
    actividades.splice(indice, 1);
    actualizarLista();
}

// Escuchar el evento submit del formulario
form.addEventListener('submit', agregarActividad);