import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const AttendanceSchema =   new Schema( {
    userID: {
        type: String,
        required: true
    },
    status: {
        type: Date,
        default: Date.now
    },
    endTime: {
        type: String,
        default: null
    },
    date: {
        type: Date, 
        default: Date.now
     },
})

export default  mongoose.model("attendance", AttendanceSchema);