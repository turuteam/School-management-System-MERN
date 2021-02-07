import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const OptionsModel =   new Schema( {
    events: {
      type: [
            {
                type: String
            }
         ]
    },
    date: {
        type: Date, 
        default: Date.now
     },
})

export default  mongoose.model("optionsdata", OptionsModel);