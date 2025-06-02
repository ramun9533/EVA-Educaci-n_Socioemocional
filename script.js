// Ejemplo: Cargar entradas de bitácora dinámicamente
const bitacoraData = [
    { fecha: "12/05/2024", contenido: "Durante esta jornada apliqué una ficha socioemocional con mis alumnos. La mayoría de los niños siguieron las instrucciones adecuadamente, mostrando interés en cada una de las actividades propuestas. Sin embargo, identifiqué un desafío importante en la última dinámica: la telaraña de la inclusión. Aunque la actividad tenía un objetivo claro —reflexionar sobre la importancia de incluir a todos—, noté que no logré conectar emocionalmente con los estudiantes en ese momento, y el mensaje no se comprendió como esperaba.Este hecho me dejó como aprendizaje que no basta con presentar una actividad bien estructurada; es necesario crear un vínculo afectivo y contextualizar el contenido para que tenga sentido para los niños. El desafío fue lograr que la metáfora de la telaraña tuviera impacto y generara reflexión auténtica.Retomando a Lev Vygotsky, quien plantea que el aprendizaje significativo se da en contextos sociales y mediante la interacción con otros, reconozco que me faltó mediar el diálogo y conectar la experiencia con situaciones reales del grupo. Este día me enseñó la importancia de no solo planear con intención, sino también de estar atento a la respuesta emocional del grupo y adaptar la intervención en el momento." },
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
