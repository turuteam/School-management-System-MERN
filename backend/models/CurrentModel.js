import mongoose from "../config/mongodb.js";

const { Schema } = mongoose;

const AcademicYearSchema = new Schema(
  {
    currentYear: {
      type: String,
    },
    currentTerm: {
      type: String,
    },
    code: {
      type: String,
      default: "admin",
    },
  },
  { timestamps: true }
);

export default mongoose.model("academicYear", AcademicYearSchema);
