import  mongoose from "../config/mongodb.js"

const { Schema } = mongoose;

const DepartmentSchema =   new Schema( {
  headTeacher: {
      type: String
  },
  name: {
     type: String
  },
  office: {
      type: String
  },
  date: {
      type: Date,
      default: Date.now
  }
}, { timestamps: true })

export default  mongoose.model("departments", DepartmentSchema);