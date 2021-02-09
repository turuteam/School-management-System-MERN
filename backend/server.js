import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//import routes
import StudentRoutes from './routes/StudentRoutes.js'
import AttendanceRoutes from './routes/AttendanceRoutes.js';
import ChatRoutes from './routes/ChatRoutes.js';
import CoursesRoutes from './routes/CoursesRoutes.js'
import ClassesRoutes from './routes/ClassesRoutes.js';
import CalendarRoutes from './routes/CalendarRoutes.js';
import FilesRoutes from './routes/FilesRoutes.js';
import NextofKinRoutes from './routes/NextofKinRoutes.js';
import NonTeachersRoutes from './routes/NonTeachersRoutes.js';
import NotificationRoutes from './routes/NotificationRoutes.js';
import ResultsRoutes from './routes/ResultsRoutes.js';
import TaskRoutes from './routes/TaskRoutes.js';
import TeacherRoutes from './routes/TeacherRoutes.js';
import TimeTableRoutes from './routes/TimeTableRoutes.js';
import SharedRoutes from './routes/SharedRoutes.js';
import DepartmentsRoutes from './routes/DepartmentRoutes.js';
import UploadsRoutes from './routes/Uploads.js';
import path from 'path';
const __dirname = path.resolve(path.dirname(''));

const app = express();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/consumerPhotos"));
app.use(express.static("./public"));

//routes
app.get('/', (req,res) => {
    res.send('welcome to D-system api')
  })
  
app.use("/api/students", StudentRoutes); 
app.use("/api/attendance", AttendanceRoutes);  
app.use("/api/chat", ChatRoutes);  
app.use("/api/classes", ClassesRoutes);  
app.use("/api/courses", CoursesRoutes);  
app.use("/api/calendar", CalendarRoutes);
app.use("/api/notes", FilesRoutes); 
app.use("/api/nextofkin", NextofKinRoutes);
app.use("/api/nonteachers", NonTeachersRoutes);
app.use("/api/notification", NotificationRoutes); 
app.use("/api/results", ResultsRoutes);  
app.use("/api/tasks", TaskRoutes);
app.use("/api/teachers", TeacherRoutes); 
app.use("/api/timetable", TimeTableRoutes);   
app.use("/api", SharedRoutes);
app.use("/upload", UploadsRoutes);
app.use("/api/departments", DepartmentsRoutes)

  
app.listen(PORT, () => {
    return console.log(`listening on port ${PORT}`)
  })