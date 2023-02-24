const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const appointmentSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    doctorId: {
        type: Schema.Types.ObjectId, ref: 'Doctor',
        required: true
    },
    appointment_date:{
        type:Date,
        required: true
    },date:{
        type:Date,
        required: true
    }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;