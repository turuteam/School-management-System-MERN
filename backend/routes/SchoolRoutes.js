import express from "express";
import SchoolModel from "../models/SchoolModel.js";
import  bcrypt from 'bcrypt';
import {login, changePassword} from  '../middlewares/validate.js';
import {role} from '../middlewares/variables.js'

const route = express.Router();

//find user by id
route.get('/user/:id', async(req, res) => {
    if(!req.params.id) {
        return res.status(400).send('Missing URL parameter: username')
      }
    await SchoolModel.findOne({ userID: req.params.id, role: role.Admin})
    .then(user => {
        if(user){
        return  res.json({success: true,user})
        }
        else{
        return  res.json({success: false, error: 'User does not exists'})
        }
    })
    .catch(err => {
        
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
  
    SchoolModel.findOne({
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
  route.put('/update/:id', async(req, res) => {
      console.log(req.body)
    SchoolModel.findOneAndUpdate({
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
    SchoolModel.findOne({userID:  req.params.id}).then(user => {
      if(user){
        if (bcrypt.compareSync(req.body.oldPassword, user.password)){
              bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
                if(err){
                  console.log("err")
                  return res.json( { success: false, error: err })
                }
                SchoolModel.findOneAndUpdate({
                  userID: req.params.id
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