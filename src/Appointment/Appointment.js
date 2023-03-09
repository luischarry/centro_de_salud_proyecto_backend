const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId, ref: 'User',

    },
    doctorId: {
        type: Schema.Types.ObjectId, ref: 'Doctor',
        
    },
    time: {
        type: String,
        
    },
    date: {
        type: String,
        
    }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;