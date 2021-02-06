import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const ClassesSchema =   new Schema( {
    name: {
        type: String,
        required: true
    },
    teacherID: {
        type: String
    },
    classCode: {
        type: String,
        required: true
    },
    campusID: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    } 
})

export default  mongoose.model("classes", ClassesSchema);