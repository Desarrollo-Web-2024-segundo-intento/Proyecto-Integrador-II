const opcionesEspecialidades = document.getElementById("especialidad");
const opcionesProfesionales = document.getElementById("profesional");
const opcionesFechas = document.getElementById("fecha");
const opcionesHoras = document.getElementById("hora");

const listadoEspecialidades = "json/especialidades.json";
const listadoProfesionales = "json/profesionales.json";
const listadoFechas = "json/fecha.json";
const listadoHoras = "json/hora.json";

//Petición a archivo local "especialidades.json" para cargar opciones del select de especialidades

fetch(listadoEspecialidades)
    .then(respuesta => respuesta.json())
    .then(datos => {
        opcionesEspecialidades.innerHTML = `<option value="0" selected>Especialidad</option>`
        datos.forEach(especialidad => {
            opcionesEspecialidades.innerHTML += `<option value="${especialidad.nombre}">${especialidad.nombre}</option>`;
        })
    })
    .catch(error => console.log(error)) 

/*Se dispara el evento input al seleccionar una especialidad, se hace una petición al archivo local "profesionales.json" 
y se cargan solo los profesionales de dicha especialidad*/

opcionesEspecialidades.addEventListener("input", () => {
    opcionesFechas.innerHTML = `<option value="0" selected>Fecha</option>`;
    fetch(listadoProfesionales)
        .then(respuesta => respuesta.json())
        .then(datos => {
            opcionesProfesionales.innerHTML = `<option value="0" selected>Profesional</option>`;
            datos.forEach(profesional => {
                fetch(listadoEspecialidades)
                    .then(respuesta => respuesta.json())
                    .then(datos => {
                        datos.forEach(especialidad => {
                            if(especialidad.nombre == opcionesEspecialidades.value) {
                                if (profesional.idEspecialidad == especialidad.id) {
                                    opcionesProfesionales.innerHTML += `<option value="${profesional.nombre}">${profesional.nombre}</option>`;
                                }
                            }

                        })            
                    })
            })
        })     
})

/*Se dispara el evento input al seleccionar un profesional, se hacen peticiones tanto al archivo local "profesionales.json" y "fechas.json" 
para obtener los datos necesarios para deshabilitar las opciones de fecha en la que el profesional en cuestión no posea turnos disponibles*/

opcionesProfesionales.addEventListener("input", () => {
    opcionesHoras.innerHTML = `<option value="" selected>Hora</option>`;
    fetch(listadoProfesionales)
        .then(respuesta => respuesta.json())
        .then(datos => {
            datos.forEach(profesional => {
                if(profesional.nombre == opcionesProfesionales.value) {
                    fetch(listadoFechas)
                        .then(respuesta => respuesta.json())
                        .then(datos => {
                            opcionesFechas.innerHTML = `<option value="0" selected>Fecha</option>`;
                            let turnos_ = [];
                            if(localStorage.getItem("turnos")) {
                                turnos_ = JSON.parse(localStorage.getItem("turnos"));
                            }
                            const turnosProfesional = turnos_.filter(turno => turno.profesional == profesional.nombre);
                            datos.forEach(fecha => {
                                if(turnosProfesional.length == 0) {
                                    opcionesFechas.innerHTML += `<option value="${fecha.nombre}">${fecha.nombre}</option>`;
                                } else {
                                    let contador = 0;
                                    turnosProfesional.forEach (turno => {
                                        if(turno.fecha == fecha.nombre) {
                                            contador++;
                                        }
                                    })
                                    if(contador == 16) {
                                        opcionesFechas.innerHTML += `<option value="${fecha.nombre}" disabled>${fecha.nombre}</option>`;
                                    } else {
                                        opcionesFechas.innerHTML += `<option value="${fecha.nombre}">${fecha.nombre}</option>`;
                                    }
                                }

                            })           
                        })
                }
            })
        })


})

/*Se dispara el evento input al seleccionar una fecha, se hacen peticiones tanto al archivo local "profesionales.json" y "horas.json" 
para obtener los datos necesarios para deshabilitar las opciones de hora de la fecha seleccionada en las que el profesional en 
cuestión no posea turnos disponibles*/

opcionesFechas.addEventListener("input", () => {
    fetch(listadoProfesionales)
        .then(respuesta => respuesta.json())
        .then(datos => {
            datos.forEach(profesional => {
                if(profesional.nombre == opcionesProfesionales.value) {
                    fetch(listadoHoras)
                        .then(respuesta => respuesta.json())
                        .then(datos => {
                            let turnos_ = [];
                            if(localStorage.getItem("turnos")) {
                                turnos_ = JSON.parse(localStorage.getItem("turnos"));
                            }
                            const turnosProfesional = turnos_.filter(turno => turno.profesional == profesional.nombre).filter(turno => turno.fecha == opcionesFechas.value);
                            datos.forEach(hora => {
                                if(profesional.franjaHoraria == hora.franjaHoraria) {
                                    if(turnosProfesional.length == 0) {
                                        opcionesHoras.innerHTML += `<option value="${hora.nombre}">${hora.nombre}</option>`;
                                    } else {
                                        let verificador = false;
                                        turnosProfesional.forEach (turno => {
                                            if(turno.hora == hora.nombre) {
                                                verificador = true;
                                            }
                                        })
                                        if(verificador == true) {
                                            opcionesHoras.innerHTML += `<option value="${hora.nombre}" disabled>${hora.nombre}</option>`;
                                        } else {
                                            opcionesHoras.innerHTML += `<option value="${hora.nombre}">${hora.nombre}</option>`;
                                        }
                                    }
                                    
                                }
                            })

                        })
                }
            })
        })
})



