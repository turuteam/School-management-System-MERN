import express from "express";
import CanteenModel from "../models/CanteenModel.js";
import StudentModel from '../models/StudentModel.js';


const route = express.Router();

//get all events
route.get('/', async(req, res) => {
    const docs = await CanteenModel.find();
    res.json(docs);
})

//search event by name



//get one by id
route.get('/:id', async(req, res) => {
  if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    }
  await CanteenModel.findOne({ memberID: req.params.id })
  .then(docs => {
      if(docs){
          return  res.json({success: true,user: docs})
      }
      else{
          return  res.json({success: false, error: 'Does not exists'})
      }
  })
  .catch(err => {
      return res.json({success: false, error: "Server error"})
  });
})

//create
route.post('/create', async(req, res) => {
    let body = req.body;
    const isuserExist = await StudentModel.findOne({userID: req.body.userID});
    if(!isuserExist){
        return res.json({success: false, error: "User ID  does not exist"});
    }
    const isExist = await CanteenModel.findOne({userID: req.body.userID});
    if(isExist){
        return res.json({success: false, error: "Member already exist"});
    }
    //create id
    const currentYear = new Date().getFullYear();
    const number = await CanteenModel.countDocuments();

    let memberID = 'CA' + currentYear + (number + 1)
     CanteenModel
     .create({...body, memberID})
     .then(doc => {
            console.log(doc)
            res.json({success: true, user: doc});
      })
      .catch(err => {
            console.log(err)
            res.json({success: false, message:err})
      })
});


//edit
route.put('/update/:id', (req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    } 
  CanteenModel.findOneAndUpdate({
      memberID: req.params.id
    }, req.body, {
      new: true
    })
    .then(doc => {
        console.log(doc)
        if(!doc){
          return res.json({success: false, error: "does not exists"})
       }
        return  res.json({success: true, doc});
      })
    .catch(err => {
        res.json({success: false, error:err})
    })
  
  });

//delete
route.delete('/delete/:id', (req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    }
    CanteenModel.findOneAndRemove({
      memberID: req.params.id
    })
    .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })



export default route;