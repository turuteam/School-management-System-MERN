import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const SchoolSchema =   new Schema( {
    name: {
        type: String,
        required: true
    },
    subName: {
        type: String,
        required: true
    },
    motto: {
      type: String,
    },
    logo: String,
    address: String,
    email: String,
    teleophone: String,
    teacherID: String,
    repID: String,
    date: {
        type: Date,
        default: Date.now
    } 
}, { timestamps: true })

export default  mongoose.model("school", SchoolSchema);