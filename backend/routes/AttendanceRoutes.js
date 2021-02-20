import express from "express";
import AttendanceModel from "../models/AttendenceModel.js";
import {startAttendance,} from '../middlewares/validate.js'


const route = express.Router();


//get attendance
route.get('/', async(req, res) => {
    const docs = await AttendanceModel.find();
    res.json(docs);
})

// all students attendance or staff
route.get('/:id', async(req, res) => {
    const docs = await AttendanceModel.find({role: req.params.id});
    res.json(docs);
})

//get One  student attendance data
route.get('/user/:id', async(req, res) => {
    const docs = await AttendanceModel.find({'users.userID' : req.params.id});
    res.json(docs);
})


//attendance by day doc
route.get('/attendance/:id', async(req, res) => {
    const docs = await AttendanceModel.findOne({_id: req.params.id, });
    res.json(docs);
})


//attendance by class  date

//all staff attendace

//staff attendance by date

//each student  records 
route.post('/register', async(req, res)  => {
    const users = req.body.users;
    const classID = req.body.classID;
    const role = req.body.role;

    //check if exist
    let isExist = await AttendanceModel.findOne({classID, date: {     
        $gte:   new Date(new Date().setDate(new Date().getDate()-1)) ,     
        $lt :  new Date() 
   } })
    if(isExist){
        AttendanceModel.updateOne({_id : isExist?._id}, {
            users
        }).then(() => {
            console.log("already exists")
            return res.json({success: true, message: "OK"})
        }).catch(err => {
            console.log(err)
             return  res.json({success: false, message: "something when wrong"})
        })

    }

    AttendanceModel.create({
        classID,
        users: users,
        role
    }).then(data => {
        if(data){
            return res.json({success: true, message: "OK"})
        }
        else{
            return  res.json({success: false, message: "something when wrong"})
        }
    }).catch(err => {
        return  res.json({success: false, message: err})
    })
})




// record start time
route.post('/start/:id', async(req, res) => {
    if(!req.params.id) {
        return res.json({success: false, error: 'Missing URL parameter: username'})
    }

    let body = req.body
   const {error} = startAttendance.validate(body);

    if(error){
        console.log(error)
       return  res.json({success: false, error : error.details[0].message})
    }

    //check whether already exist
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const isExist = await AttendanceModel.findOne({
       userID: req.params.id,
       date: {$gte: today}
    }).exec()
    if(isExist){
        return res.json({success: false, error: "Already Registered"})
    }

    AttendanceModel.create({
        userID: req.params.id,
        startLocation: req.body.startLocation
    })
    .then(doc => {
        res.json({success: true, doc});
      })
    .catch(err => {
        console.log(err)
        res.json({success: false, error:err})
    })
  });



//update class register
route.put('/update/:id', async(req, res) => {

    AttendanceModel.findOneAndUpdate({
        _id: req.params.id
    },{
          users: req.body.users
        },{
        new: true
        })
        .then(doc => {
            return  res.json({success: true, message: "OK"});  
        })
        .catch(err => {
          return  res.json({success: false, error:err})
        })
  
  });



export default route;