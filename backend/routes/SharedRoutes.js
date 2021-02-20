import express from "express";
import {uploader} from '../middlewares/multer.js'
import StudentModel from "../models/StudentModel.js";
import AttendanceModel from '../models/AttendenceModel.js';
//import ChatModels from '../models/ChatModel.js';
import CoursesModels from '../models/CoursesModel.js'
import ClassesModel from '../models/ClassesModel.js';
import Campus from '../models/CampusesModel.js';
import CalendarModel from '../models/CalenderModel.js';
// import FilesModels from '../models/FilesModels.js';
// import NextofKinModels from '../models/NextofKinModels.js';
// import NonTeachersModels from '../models/NonTeachersModels.js';
 import NotificationsModel from '../models/NoticeModel.js';
// import ResultsModels from '../models/ResultsModels.js';
// import TaskModels from '../models/TaskModels.js';
 import TeacherModels from '../models/TeacherModel.js';
// import TimeTableModels from '../models/TimeTableModels.js';
// import DepartmentsModels from '../models/DepartmentModels.js';
// import CanteenModels from '../models/CanteenRouter.js';
// import BankingModels from '../models/BankingModels.js';
// import FeesModels from '../models/FeesModels.js';\\
import { login ,changePassword} from  '../middlewares/validate.js';
import {role} from '../middlewares/variables.js'


import  bcrypt from 'bcrypt';
const route = express.Router();

route.get('/', async(req, res) => {
   res.send('shared rotes')
})

//staff count
route.get('/staff/count/:id', async(req, res) => {
  if(!req.params.id) {
    return res.status(400).send('Missing URL parameter: username')
  }
  const staff =  await TeacherModels.findOne({
    role: role.Teacher, 
    userID: req.params.id
  });

  const notifications = await NotificationsModel.find({date: {$gte: new Date()}});

  let date = new Date()
  date.setDate(date.getDate()-30);
  const  attendance = await AttendanceModel.find({'users.userID' : req.params.id, date: {$gte: date}});

  const docs = await CalendarModel.find({date : {$gte: date}});

  return  res.json({
    success: true,
    count :{
         courses: staff?.courses?.length,
         classes: staff?.classID,
         attendance: attendance?.length,
         notifications: notifications?.length,
         events: docs?.length
      }
    })
})


//count
route.get('/student/count/:id', async(req, res) => {
  if(!req.params.id) {
    return res.status(400).send('Missing URL parameter: username')
  }
  const student =  await StudentModel.findOne({
    role: role.Student, 
    userID: req.params.id
  });

  
  const notifications = await NotificationsModel.find({date: {$gte: new Date()}});

  let date = new Date()
  date.setDate(date.getDate()-30);
  const  attendance = await AttendanceModel.find({'users.userID' : req.params.id, date: {$gte: date}});

  const docs = await CalendarModel.find({date : {$gte: date}});

  return  res.json({
    success: true,
    count :{
         courses: student?.courses?.length,
         attendance: attendance?.length,
         notifications: notifications?.length,
         events: docs?.length
      }
    })
})

route.get('/count', async(req, res) => {
    const students = await StudentModel.countDocuments({role: role.Student})


    const femaleStudents = await StudentModel.countDocuments({role: role.Student, gender: "female"});
    const maleStudents = await StudentModel.countDocuments({role: role.Student, gender: "male"});
    
    const staff = await TeacherModels.countDocuments({role: role.Teacher});
    const campuses = await Campus.countDocuments();
    const classes = await ClassesModel.countDocuments();
    const courses =await CoursesModels.countDocuments();
    res.json({students, staff, campuses, classes, courses, femaleStudents, maleStudents})
})

route.post('/upload/', uploader.single('photo') ,(req , res) => {
    try {
      console.log(req.body.caption)
      res.send({path: `${req.file.filename}`});
    } catch (err) {
      console.log(err)
      res.json({success: false, message:err});
    }
})


//get student's class details
 route.get('/student/classDetails/:id', (req,res) => {
      let userID = req.params.id;
      if(!userID){
        return res.json({success: false, error: "User ID is required"})
      }
      //get user
      const user = StudentModel.findOne({userID});
      if(!user){
        return res.json({success: false, error: "Student Does not exists"})
      }
      const classID =  user?.classID;
      if(classID){
            const classDetails = ClassesModel.findOne({classCode : classID});
            return res.json({success: true , class: classDetails}) 
      }
 })


//find user by id
route.get('/user/:id', async(req, res) => {
  if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    }
  await StudentModel.findOne({ userID: req.params.id})
  .then(user => {
      if(user){
        console.log(user)
      return  res.json({success: true,user})
      }
      else{
      return  res.json({success: false, error: 'User does not exists'})
      }
  })
  .catch(err => {
      console.log(err)
      return res.json({success: false, error: "WRONG error"})
  });
})



//signin user
route.post('/signin', async(req, res) => {
  let body = req.body;
  
  const {error} = login.validate(body);
  if(error){
   return   res.send({ error: error.details[0].message,  success: false})
  }

  StudentModel.findOne({
    userID: body.userID,
    }).then((user) => {
     if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
           return  res.json({success: true, user})
        } 
        else {
           return res.json({ error: 'Wrong Password or  ID',  success: false })
        }
    } 
    else {
       return res.json({ error: 'Wrong Password or  ID',  success: false })
    }
  }).catch(err => {
    console.log(err)
    return res.json({ error: 'something when wrong', success: false })
  })

})


//upload profile
route.post('/update/profile/:id', async(req, res) => {
  StudentModel.findOneAndUpdate({
    userID: req.params.id,
    }, req.body, { new: true})
    .then((user) => {
      if(user){
        return  res.json({success: true, user})
      }
      else{
        return res.json({ error: 'something when wrong', success: false })
      }
      
  }).catch(err => {
    console.log(err);
    return res.json({ error: 'something when wrong', success: false })
  })
})


//change password
route.post('/change/password/:id', async(req, res )=> {
  const {error} = changePassword.validate(req.body);
  if(error) {
      return  res.json({success: false, error : error.details[0].message})
  }
  StudentModel.findOne({userID:  req.params.id}).then(user => {
    if(user){
      if (bcrypt.compareSync(req.body.oldPassword, user.password)){
            bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
              if(err){
                console.log("err")
                return res.json( { success: false, error: err })
              }
              StudentModel.findOneAndUpdate({
                studentID: req.params.id
              },{password: hash}, {
                   new: true
              })
              .then(doc => {
                   return res.json({success: true, message: "Password successfully changed"})
                })
              .catch(e => {
                console.log("e")
                  return res.json( { success: false, error: e + "e"})
              })
          })  
      }
      else{
          return res.json( { success: false, error: "Wrong old password"})
      }
    }
    else{
      return res.json({success: false, error: "User  does not exist"})
    }
  })
})


route.delete('/user/delete/:id', (req, res) => {
  if(!req.params.id) {
    return res.status(400).send('Missing URL parameter: username')
  }
 StudentModel.findOneAndRemove({
    userID: req.params.id
  })
  .then((doc) => {
       if(!doc){
          return
       }
      return res.json({success: true, message: ` ${req.params.id} is successfully DELETED`})
    })
    .catch(err => {
      res.status(500).json(err)
    })
})


export default route;