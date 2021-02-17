import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const CourserSchema =   new Schema( {
    date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    teacher: {
        type: String
    },
    default: []
}, { timestamps: true })

export default  mongoose.model("courses", CourserSchema);