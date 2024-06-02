import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  private especialidadesList: any[]; 

  constructor() {
    console.log("especialidades services list");
    this.especialidadesList = [ 
      { id:1, img: "/assets/img/clinico.jpg", alt: "Medico Clinico",titulo:"Medico Clinico", precio:7600 ,descripcion:"Ofrecemos una atención dedicada y comprensiva para abordar tus necesidades médicas generales. Con experiencia y empatía, trabajamos para proporcionarte cuidados personalizados que promuevan tu bienestar a largo plazo. Estamos aquí para ser tu aliado en el camino hacia una salud óptima y una vida plena.", cantidad:1 },
      { id:2, img: "assets/img/pediatra.jpg", alt: "pediatria", titulo:"Pediatría",precio:7600,descripcion:"Cuidamos de tus hijos con dedicación. Somos especialistas en el cuidado infantil, atendemos todas las necesidades de salud de tus hijos, desde consultas rutinarias hasta situaciones urgentes, asegurando el bienestar y la felicidad de cada niño quienes recibirán el cuidado cariñoso y profesional que merecen.", cantidad:1},
      { id:3, img: "assets/img/oncologia.jpg",  alt: "oncologia", titulo:"Oncología",precio:7600, descripcion:"Nuestro servicio de Oncología ofrece atención médica especializada y compasiva para pacientes con cáncer. Con un equipo experto y dedicado, estamos comprometidos a brindar el mejor cuidado posible, apoyando a nuestros pacientes y sus familias en cada paso del camino hacia la recuperación.", cantidad:1},
      { id:4, img: "assets/img/cardiologia.jpg", alt:"cardiologia",titulo:"Cardiología",precio:7600, descripcion:"Ofrecemos atención médica cuidadosa para pacientes con problemas cardíacos. Con un equipo altamente capacitado y tecnología de vanguardia, nos dedicados a cuidar de tu corazón y tu salud cardiovascular. Confía en nosotros para brindarte la atención que necesitas para mantener un corazón sano y una vida plena.", cantidad:1},
      { id:5, img: "assets/img/gastroenterologia.jpg", alt:"gastroenterologia",titulo:"Gastroenterología",precio:7600, descripcion:"Nuestra especialidad en Gastroenterología ofrece un enfoque experto y compasivo para tratar problemas digestivos y del tracto gastrointestinal. Con un equipo médico dedicado y experimentado, nos esforzamos por proporcionar soluciones efectivas que promuevan tu bienestar digestivo y mejoren tu calidad de vida.", cantidad:1},
      { id:6, img: "assets/img/endocrinologia.jpg", alt:"Endocrinología",titulo:"Endocrinología",precio:7600, descripcion:"Nos dedicamos a abordar desórdenes hormonales y problemas metabólicos con atención especializada y compasiva. Estamos comprometidos a ofrecerte soluciones personalizadas y cuidados integrales para promover tu salud y bienestar. Estamos aquí para trabajar contigo en cada paso del camino hacia una vida más saludable y equilibrada.", cantidad:1},
      { id:7, img: "assets/img/reumatologia.jpg", alt:"Reumatología",titulo:"Reumatología",precio:7600, descripcion:" Nos especializamos en el tratamiento de enfermedades relacionadas con los tejidos blandos, las articulaciones y el sistema inmunológico. Nos comprometemos a proporcionar un enfoque integral y personalizado para abordar tus necesidades de salud. Trabajamos para mejorar tu calidad de vida y promover tu bienestar general.",  cantidad:1},
      { id:8, img: "assets/img/ginecologia.jpg", alt:"Ginecología",titulo:"Ginecología",precio:7600, descripcion:"En nuestro servicio de Ginecología, nos enfocamos en la salud integral de la mujer. Nuestro equipo especializado ofrece atención personalizada y comprensiva para abordar tus necesidades, desde exámenes de rutina hasta tratamientos especializados,  Estamos aquí para cuidarte y apoyarte en todas las etapas de tu vida.",  cantidad:1 },
      { id:9, img: "assets/img/obstetricia.jpg", alt:"Obstetricia",titulo:"Obstetricia",precio:7600, descripcion:"Nos dedicamos al cuidado especializado de la salud materna y fetal durante el embarazo y el parto. Nuestro equipo médico altamente capacitado ofrece atención compasiva y experta para garantizar un embarazo saludable y un parto seguro. Estamos aquí para acompañarte en este viaje único y especial de tu vida.", cantidad:1},
      { id:10, img: "assets/img/dermatologia.jpg", alt:"Dermatología",titulo:"Dermatología",precio:7600, descripcion:"Estamos enfocados en el cuidado de la piel, el cabello y las uñas. Te ofrecemos atención experta y personalizada para una amplia gama de condiciones dermatológicas. Te ayudamos a mantener una piel saludable y radiante, brindándote soluciones efectivas para que te sientas seguro y confiado en tu propia piel.", cantidad:1},
      { id:11, img: "assets/img/psicologia.jpg", alt:"Psicología",titulo:"Psicología",precio:7600, descripcion:"Dedicados al cuidado integral de la salud mental y emocional. Ofrecemos terapia personalizada y apoyo compasivo para ayudarte a superar los desafíos y mejorar tu bienestar psicológico. Te brindamos las herramientas y el acompañamiento necesario para que puedas alcanzar una vida más equilibrada y satisfactoria.", cantidad:1},
      { id:12, img: "assets/img/internacion.jpg", alt:"Internación",titulo:"Internación",precio:7600, descripcion:"Nuestro servicio de Emergencias Médicas ofrece atención inmediata y experta en situaciones críticas. Con un equipo altamente capacitado y equipamiento de vanguardia, estamos listos para brindarte la ayuda que necesitas en cualquier momento. Tu seguridad y bienestar son nuestra prioridad número uno.", cantidad:1},
    ]; 
  }

  getEspecialidades() {
    return this.especialidadesList;
  }
}
