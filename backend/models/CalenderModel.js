import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const CalendarSchema =   new Schema( {
    title: {
        type: String,
        required: true
    },
    resource: {
        type: String
    },
    description: {
        type: String
    },
    start: {
        type: Date,
    },
    end: {
        type: Date
    },
    allDay: {
        type: Boolean
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default  mongoose.model("calendar", CalendarSchema);