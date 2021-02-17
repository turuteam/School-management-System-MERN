
import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const FeesSchema =   new Schema( {
    name: {
        type: String
    },
    code: {
       type: String
    },
    term: String,
    year: String,
    day: {
       type: {
               tution: String,
               facility: String,
               maintenance: String,
               exam: String
           }
    },
    freshDay: {
        type: {
                tution: String,
                facility: String,
                maintenance: String,
                exam: String
            }
     },
     border: {
        type: {
                tution: String,
                facility: String,
                maintenance: String,
                exam: String
            }
     },
     freshBorder: {
        type: {
                tution: String,
                facility: String,
                maintenance: String,
                exam: String
            }
     }
}, { timestamps: true })

export default  mongoose.model("fees", FeesSchema);