import express from "express";
import FilesModel from "../models/FilesModel.js";
//import {uploader} from '../middlewares/multer.js'

const route = express.Router();

// route.post("/", uploader.single("photo"), (req, res, next) => {
//   try {
//     console.log("logging req.file: ", req.file);
//     res.send({path: `${req.file.filename}`});
//    // res.status(200).sendFile(`${__dirname}/public/consumerPhotos/${req.file.filename}`);
//   } 
//   catch (err) {
//     res.status(418).send(err);
//   }
// });

//search

//get files for teacher
//get file for student

//get one by id
route.get('/:id', async(req, res) => {
  if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    }
  await FilesModel.findOne({ _id: req.params.id })
  .then(user => {
      if(user){
      return  res.json({success: true,student: user})
      }
      else{
      return  res.json({success: false, error: 'Does not exists'})
      }
  })
  .catch(err => {
      return res.json({success: false, error: "Server error"})
  });
})

//create task
route.post('/create', async(req, res) => {
    let body = req.body
  
    FilesModel.create(body)
    .then(doc => {
        res.json({success: true, doc});
      })
    .catch(err => {
        console.log(err)
        res.json({success: false, message:err})
    })
  });

//edit task
route.put('/update/:id', (req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    } 
  FilesModel.findOneAndUpdate({
      _id: req.params.id
    }, req.body, {
      new: true
    })
    .then(doc => {
        console.log(doc)
        if(!doc){
           return res.json({success: false, error: "doex not exists"})
        }
       return res.json({success: true, doc});
    })
    .catch(err => {
        res.json({success: false, message:err})
    })
  
  });



//delete task
route.delete('/delete/:id', (req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    }
  FilesModel.findOneAndRemove({
      _id: req.params.id
    })
    .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })



export default route;