import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const SchoolSchema =   new Schema( {
    name: {
        type: String,
    },
    fullName: {
        type: String,
    },
    motto: {
      type: String,
    },
    role: {
        type: String,
    },
    logo: String,
    address: String,
    photoUrl: String,
    email: String,
    telephone: String,
    password: String,
}, { timestamps: true })

export default  mongoose.model("accounts", SchoolSchema);