// export interface Turno {
//     id:number;
//     especialidad: string;
//     profesional: string;
//     fecha: string;
//     hora: string;
//     // obraSocial: string;
// }

export interface Turno {
    especialidad: string;
    profesional_id: string;
    fecha_turno: string; // Asegúrate de que estas propiedades existen en el JSON
    hora_turno: string;  // y que los nombres coinciden exactamente.
  }
