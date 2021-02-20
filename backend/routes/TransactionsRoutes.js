import express from "express";
import TransactionsModel from "../models/TransactionsModel.js";



const route = express.Router();


//get banking details
route.get('/', async(req, res) => {
    const docs = await TransactionsModel.find();
    res.json(docs);
})

//get one bank details
route.get('/:id', async(req, res) => {
    const docs = await TransactionsModel.findOne({_id: req.params.id});
    if(docs){
        return  res.json(docs);
    }
    else{
        return res.json({error: "", message: "Bank not found"})
    }
})

//get fees
route.get('/students/fees', async(req, res) => {
    const docs = await TransactionsModel.find({category:{$regex :"fees"}});
    if(docs){
        return  res.json(docs);
    }
    else{
        return res.json({error: "", message: "Bank not found"})
    }
})


route.post('/create', async(req, res)  => {
    TransactionsModel.create(
        req.body
    ).then(data => {
        if(data){
            return res.json({success: true, doc:data})
        }
        else{
            return  res.json({success: false, message: "something when wrong"})
        }
    }).catch(err => {
        return  res.json({success: false, message: err})
    })
})


//update class register
route.put('/update/:id', async(req, res) => {
    TransactionsModel.findOneAndUpdate({
        _id: req.params.id
    }, req.body,{
        new: true
        })
        .then(doc => {
            return  res.json({success: true, message: "OK"});  
        })
        .catch(err => {
          return  res.json({success: false, error:err})
        })
  
  });



  //add transctations
  route.post('/add/transactions/:id', async(req, res) => {
    TransactionsModel.findOneAndUpdate({
        _id: req.params.id
    },{$push: {transactions: req.body}},{
        new: true
        })
     .then(doc => {
            return  res.json(doc.transactions);  
     })
    .catch(err => {
          return  res.json({success: false, error:err})
        })
  });


  //delete 
  route.delete('/delete/:id', async(req, res) => {
    TransactionsModel.findOneAndDelete({
        _id: req.params.id
      })
        .then(doc => {
            return  res.json({success: true, message: "OK"});  
        })
        .catch(err => {
          return  res.json({success: false, error:err})
        })
  });


export default route;