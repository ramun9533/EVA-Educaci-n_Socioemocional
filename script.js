// Ejemplo: Cargar entradas de bitácora dinámicamente
const bitacoraData = [
    { fecha: "12/05/2024", contenido: "Primera observación: Los estudiantes mostraron interés en el debate sobre emociones." },
{ fecha: "13/05/2024", contenido: "Desafío: Falta de recursos tecnológicos en la comunidad." }, 
{ fecha: "14/05/2024", contenido: "Desafío: Falta de recursos tecnológicos en la comunidad." }, 
{ fecha: "15/05/2024", contenido: "Dia Festivo" }, 
{ fecha: "16/05/2024", contenido: "Desafío: Falta de recursos tecnológicos en la comunidad." }
];

function cargarBitacora() {
    const contenedor = document.getElementById('entradas-bitacora');
    bitacoraData.forEach(entrada => {
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>${entrada.fecha}</h3>
        <p>${entrada.contenido}</p>
        <hr>
        `;
        contenedor.appendChild(div);
    });
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarBitacora);
