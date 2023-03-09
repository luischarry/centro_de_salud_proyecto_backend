// const moment = require('moment');
// const Medico = require('./src/Doctor/Doctor');
// const Cita = require('./src/Appointment/Appointment');

// // Días hábiles (de lunes a viernes)
// const diasHabiles = [1, 2, 3, 4, 5];

// // Horas de trabajo (de 9 a 17 horas)
// const horasTrabajo = [];
// for (let hora = 9; hora <= 17; hora++) {
//   horasTrabajo.push(moment().startOf('day').hour(hora).toDate());
// }

// // Fecha inicial para generar citas
// const fechaInicial = moment().add(3, 'days').startOf('day').toDate();

// // Generar citas para cada médico
// Medico.find()
//   .then(medicos => {
//     medicos.forEach(medico => {
//         console.log(medico)
//       // Generar citas para los próximos 5 días hábiles
//       for (let i = 0; i < 5; i++) {
//         const fecha = moment(fechaInicial).add(i, 'days').toDate();
//         if (diasHabiles.includes(moment(fecha).day())) {
//           horasTrabajo.forEach(hora => {
//             Cita.create({ medico: medico._id, hora, disponible: true });
//           });
//         }
//       }
//     });
//   });