import express from "express";
import StudentModel from "../models/StudentModel.js";
import  bcrypt from 'bcrypt';
import { login, changePassword} from  '../middlewares/validate.js';
import {stringtoLowerCaseSpace, stringSpace} from '../middlewares/utils.js';
import {role} from '../middlewares/variables.js'

const route = express.Router();

//get all students
route.get('/', async(req, res) => {
    const data = await StudentModel.find({role: role.Student});
    res.json(data);
})

//get one student by id
route.get('/student/:id', async(req, res) => {
    if(!req.params.id) {
        return res.status(400).send('Missing URL parameter: username')
      }
    await StudentModel.findOne({ userID: req.params.id })
    .then(user => {
        if(user){
          console.log(user)
        return  res.json({success: true,student: user})
        }
        else{
        return  res.json({success: false, error: 'Student does not exists'})
        }
    })
    .catch(err => {
        console.log(err)
        return res.json({success: false, error: "WRONG error"})
    });
})


//get students in class
route.get('/class/:id', async(req, res) => {
  if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    }
  await StudentModel.find({ classID: req.params.id })
  .then(user => {
      if(user){
      return  res.json({success: true,students: user})
      }
      else{
      return  res.json({success: false, message: 'Student does not exists'})
      }
  })
  .catch(err => {
      return res.json({success: false, message: "Server error"})
  });
})

//get students by gender, section , dormitory



//create student
route.post('/create', async(req , res) => {
  let body = req.body

  //  const {error} = create.validate(body);
  // if(error){
  //   return  res.json({success: false, error : error.details[0].message})
  //  }

   body = {
    ...body,
    name: stringtoLowerCaseSpace(body?.name),
    surname: stringtoLowerCaseSpace(body?.surname),
    email: stringSpace(body?.email)
  }

   const studentExist = await StudentModel.findOne({ $and : [{
        email: body.email,
        name: body.name,
        surname: body.surname,
        role: role.Student
    }]})
    if(studentExist){
        return res.json({success: false, error: "Student already exist"})
    }

    console.log(studentExist)

    //calculate student num
    const currentYear = new Date().getFullYear();
    const number = await StudentModel.countDocuments({role: role.Student});
    let studentId = 'BK' + currentYear + (number + 1)

    bcrypt.hash(studentId, 10, (err, hash) => {
          if(err){
              console.log(err, "err")
            return   res.json({success: false, error: "something went wrong"})
          }
          console.log(hash)
          const userData = {
              ...body,
              password: hash,
              userID: studentId
          }
          console.log(userData)
          StudentModel.create(userData).then(user => {
          return  res.json({success: true, student: user})
         }).catch(e => {
             console.log(e, "e")
           return   res.json({success: false, error: "something went wrong"})
         })
     })


})

//login
route.post('/signin', async(req, res) => {
    let body = req.body;
    body = {
      ...body,
      role: stringtoLowerCaseSpace(body.role)
    }
    const {error} = login.validate(body);
    if(error){
     return   res.send({ error: error.details[0].message})
    }

    StudentModel.findOne({
      userID: body.userID,
      role: body.role
      }).then((user) => {
       if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
             return  res.json({success: true, student: user})
          } 
          else {
             return res.json({ error: 'Wrong Password or Student ID' })
          }
      } 
      else {
         return res.json({ error: 'Wrong Password or Student ID' })
      }
    }).catch(err => {
      console.log(err)
    })
  
  })
  
  

//update profile pic


//change password
route.put('/changePassword/:id', async(req, res )=> {
    const {error} = changePassword.validate(req.body);
    if(error) {
        return  res.json({success: false, error : error.details[0].message})
    }
    StudentModel.findOne({_id:  req.params.id}).then(user => {
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
        return res.json({success: false, error: "Student does not exist"})
      }
    })
  })

  //update info
//address, nextof kin , classes, courses
//change password
route.put('/update/:id', (req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    }
    console.log(req.body)
    StudentModel.findOneAndUpdate({
      studentID: req.params.id
    }, req.body, {
      new: true
    })
    .then(doc => {
        console.log(doc)
        if(!doc){
          return res.json({success: false, error: "doex not exists"})
       }
        return res.json({success: true, student:  doc});
      })
    .catch(err => {
        res.json({success: false, error:err})
    })
  
  });

//delete student
route.delete('/delele/:id', (req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    }
   StudentModel.findOneAndRemove({
      studentID: req.params.id
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