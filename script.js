// Ejemplo: Cargar entradas de bitácora dinámicamente
const bitacoraData = [
    { fecha: "12/05/2024", contenido: "Durante esta jornada apliqué una ficha socioemocional con mis alumnos. La mayoría de los niños siguieron las instrucciones adecuadamente, mostrando interés. Sin embargo, identifiqué un desafío importante en la última dinámica: la telaraña de la inclusión. Aunque la actividad tenía un objetivo claro reflexionar sobre la importancia de incluir a todos, noté que no logré conectar emocionalmente con los estudiantes en ese momento, y el mensaje no se comprendió como esperaba.Este hecho me dejó como aprendizaje que no basta con presentar una actividad bien estructurada; es necesario crear un vínculo afectivo y contextualizar el contenido para que tenga sentido para los niños. El desafío fue lograr que la metáfora de la telaraña tuviera impacto y generara reflexión auténtica.Retomando a Lev Vygotsky, quien plantea que el aprendizaje significativo se da en contextos sociales y mediante la interacción con otros, reconozco que me faltó mediar el diálogo y conectar la experiencia con situaciones reales del grupo. Este día me enseñó la importancia de no solo planear con intención, sino también de estar atento a la respuesta emocional del grupo y adaptar la intervención en el momento." },
    { fecha: "13/05/2024", contenido: "En esta ocasión participé en la organización del evento conmemorativo del Día de las Madres. Aunque la jornada fue breve y los niños salieron temprano, observé un detalle significativo: varios de ellos llevaron consigo juguetes elaborados con materiales reciclados, lo cual llamó mi atención por el valor creativo y simbólico que representaban. Este hecho me recordó que el aprendizaje también ocurre en los contextos sociales y no formales. Los niños, a través del juego, expresan sus intereses, sus habilidades y su manera de interpretar el mundo. Como señala Jean Piaget, el juego es una forma natural de aprendizaje en la infancia, donde los niños construyen conocimiento al interactuar activamente con su entorno. El desafío de este día fue reflexionar cómo, incluso fuera del aula, la escuela puede promover y reconocer estos aprendizajes que emergen de la vida cotidiana, de la creatividad y del vínculo con la comunidad. Considero importante rescatar estas experiencias como oportunidades para fortalecer valores como la reutilización, la expresión personal y el cuidado del medio ambiente." }, 
{ fecha: "14/05/2024", contenido: "Este día apoyé a mi compañera Diana durante la exposición y demostración de juguetes elaborados con materiales reciclados, lo cual permitió fomentar la creatividad y la conciencia ecológica en los alumnos. Posteriormente, la maestra aplicó actividades de refuerzo sobre las tablas de multiplicar, en las cuales también colaboré brindando acompañamiento a los estudiantes que presentaban mayor dificultad. Además, se me encomendó colaborar en la guardia escolar. Mi responsabilidad consistió en vigilar que los alumnos no se acercaran a una zona considerada de riesgo, debido a la presencia de un panal de abejas y al terreno irregular, que podría ocasionar accidentes. Esta experiencia me permitió comprender la importancia de cuidar no solo los aspectos académicos, sino también el bienestar físico y emocional de los estudiantes, reconociendo que la seguridad también forma parte del proceso formativo integral." }, 
{ fecha: "15/05/2024", contenido: "Dia Festivo: Este día lo utilicé para reflexionar sobre los aprendizajes adquiridos a lo largo de la jornada de prácticas. Fue un espacio valioso para analizar mis avances, identificar áreas de mejora y reafirmar el compromiso con mi formación docente." }, 
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
