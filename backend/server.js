import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//import routes
import AcademicYear from './routes/CurrentYearRoutes.js';
import StudentRoutes from './routes/StudentRoutes.js';
import PayrowRoutes from './routes/PayrowRoutes.js';
import AttendanceRoutes from './routes/AttendanceRoutes.js';
import ChatRoutes from './routes/ChatRoutes.js';
import CoursesRoutes from './routes/CoursesRoutes.js'
import ClassesRoutes from './routes/ClassesRoutes.js';
import CampusRoutes from './routes/CampusRoutes.js';
import CalendarRoutes from './routes/CalendarRoutes.js';
import DormitoriesRoutes from './routes/DormitoriesRoutes.js';
import PrefectsRoutes from './routes/PrefectsRoutes.js';
import FilesRoutes from './routes/FilesRoutes.js';
import NextofKinRoutes from './routes/NextofKinRoutes.js';
import NotificationRoutes from './routes/NotificationRoutes.js';
import TaskRoutes from './routes/TaskRoutes.js';
import Transactions from './routes/TransactionsRoutes.js';
import TeacherRoutes from './routes/TeacherRoutes.js';
import SchoolRoutes from './routes/SchoolRoutes.js';
import PaymentPlanRoutes from './routes/PaymentPlanRoutes.js';
import SharedRoutes from './routes/SharedRoutes.js';
import StaffPay from './routes/StaffPayRoutes.js';
import ScholarshipRoutes from './routes/ScholarshipRoutes.js';
import SectionRoutes from './routes/SectionRoutes.js';
import DepartmentsRoutes from './routes/DepartmentRoutes.js';
import UploadsRoutes from './routes/Uploads.js';
import CanteenRoutes from './routes/CanteenRouter.js';
import BankingRoutes from './routes/BankingRoutes.js';
import FeesRoutes from './routes/FeesRoutes.js';

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
app.use("/api/academicyear", AcademicYear);  
app.use("/api/chats", ChatRoutes);  
app.use("/api/classes", ClassesRoutes);  
app.use("/api/courses", CoursesRoutes);  
app.use("/api/campuses", CampusRoutes)
app.use("/api/calendar", CalendarRoutes);
app.use("/api/dormitories", DormitoriesRoutes)
app.use("/api/notes", FilesRoutes); 
app.use("/api/nextofkin", NextofKinRoutes);
app.use("/api/notification", NotificationRoutes);  
app.use("/api/tasks", TaskRoutes);
app.use("/api/transactions", Transactions);
app.use("/api/teachers", TeacherRoutes);  
app.use("/api", SharedRoutes);
app.use("/api/scholarships", ScholarshipRoutes);
app.use("/api/staffpay", StaffPay);
app.use("/api/sections", SectionRoutes);
app.use("/api/school", SchoolRoutes)
app.use("/api/prefects", PrefectsRoutes);
app.use("/api/paymentplan", PaymentPlanRoutes);
app.use("/api/payrow", PayrowRoutes);
app.use("/upload", UploadsRoutes);
app.use("/api/divisions", DepartmentsRoutes);
app.use("/api/canteen", CanteenRoutes);
app.use("/api/banking", BankingRoutes);
app.use("/api/fees", FeesRoutes);  

  
app.listen(PORT, () => {
    return console.log(`listening on port ${PORT}`)
  })