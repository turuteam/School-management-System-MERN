import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const NotificationsSchema =   new Schema( {
   date: {
       type: Date,
       default: Date.now
   },
   title: {
       type: String
   },
   message: {
       type: String
   },
   sender: {
       type: String,
   },
   receiver: {
       type: [{
           id: String
       }],
       default: "All"
   }

}, { timestamps: true })

export default  mongoose.model("notices", NotificationsSchema);