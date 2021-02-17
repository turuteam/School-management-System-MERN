import express from "express";
import {uploader} from '../middlewares/multer.js'
import StudentModel from "../models/StudentModel.js";
// import AttendenceModels from '../models/AttendanceModels.js';
// import ChatModels from '../models/ChatModels.js';
// import CoursesModels from '../models/CoursesModels.js'
import ClassesModel from '../models/ClassesModel.js';
// import CalendarModels from './odels/CalendarModels.js';
// import FilesModels from '../models/FilesModels.js';
// import NextofKinModels from '../models/NextofKinModels.js';
// import NonTeachersModels from '../models/NonTeachersModels.js';
// import NotificationModels from '../models/NotificationModels.js';
// import ResultsModels from '../models/ResultsModels.js';
// import TaskModels from '../models/TaskModels.js';
// import TeacherModels from '../models/TeacherModels.js';
// import TimeTableModels from '../models/TimeTableModels.js';
// import DepartmentsModels from '../models/DepartmentModels.js';
// import CanteenModels from '../models/CanteenRouter.js';
// import BankingModels from '../models/BankingModels.js';
// import FeesModels from '../models/FeesModels.js';\\
import { login ,changePassword} from  '../middlewares/validate.js';


import  bcrypt from 'bcrypt';
const route = express.Router();

route.get('/', async(req, res) => {
   res.send('shared rotes')
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



export default route;