import express from "express";
import ChatModel from "../models/ChatModel.js";
import {sendFriendRequest, sendMessage} from '../middlewares/validate.js'

const route = express.Router();

route.get('/', async(req, res) => {
    const docs = await ChatModel.find();
    res.json(docs);
})


//get user connections
route.get("/chats/:id", async (req, res) => {
  if(!req.params.id){
      return res.json({success: false, message:" id is required"})
    }
  const messageChats = await ChatModel.find({$or: [ {acceptor_id: req.params.id} ,{ requestor_id: req.params.id }]});
  res.json(messageChats);
});

//get channel chatMessage
route.get('/chat/:id', async (req, res) => {
  if(!req.params.id){
    return res.json({success: false, message:" id is required"})
  }
 console.log(req.params.id)
 ChatModel.findOne({_id: req.params.id})
  .then(doc => {
    console.log(doc, "doc")
     return res.json(doc)
  })
  .catch(err => {
   console.log(err, "err")
    return res.json({success: false, message: "something when wrong"})
  })
})


//create connection
route.post('/create', async(req, res) => {
    let body = req.body
    const {error} = sendFriendRequest.validate(body);
     if(error){
         console.log(error)
     return  res.json({success: false, error : error.details[0].message})
     }

     //check if there is aconnection already
    const checkConnection = ChatModel.findOne({
        acceptor_id: body.acceptor_id,
        requestor_id: body.requestor_id
    })

    if(checkConnection){
        return res.json({success: false, error: "You are already friends"})
    }

    ChatModel.create(body)
    .then(doc => {
        return res.json({success: true, doc});
      })
    .catch(err => {
        console.log(err)
       return  res.json({success: false, error:err})
    })
  });

  //send to userid
  route.post('/send/user/:id/:id2', async(req,res) => {
      if(!req.params.id) {
        return res.status(400).send('Missing URL parameter: username')
      } 
      //find connects
      const checkConnection = await ChatModel.findOne({
        $or : [
          {requestor_id: req.params.id, acceptor_id: req.params.id2} ,
          {requestor_id: req.params.id2, acceptor_id: req.params.id1}
        ]
        });
        
      //if no connection , create one 
      console.log(checkConnection)
      if(!checkConnection){
         ChatModel.create({
             requestor_id: req.params.id,
             acceptor_id: req.params.id2
         })
         .then((response) => {
              console.log(response)
              ChatModel.findOneAndUpdate({
                _id: response._id
              }, {$push : {messages: req.body}}, {
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
        })
        .catch(err => {
            console.log(err)
          return  res.json({success: false, error:err})
        })
      }
      else{
        ChatModel.findOneAndUpdate({
          _id: checkConnection._id
        }, {$push : {messages: req.body}}, {
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

      }

      //send message

  })



//send message
route.put('/send/:id', (req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    } 

    const {error} = sendMessage.validate(req.body);
    if(error){
        console.log(error)
    return  res.json({success: false, error : error.details[0].message})
    }

 //check whether there is connection
 const checkConnection = ChatModel.findOne({
      _id:req.params.id,
       status: true
})

if(!checkConnection){
    return res.json({success: false, error: "you are not friends"})
}

  ChatModel.findOneAndUpdate({
      _id: req.params.id
    }, {$push : {messages: req.body}}, {
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


//delete message
route.delete('/delete/:id', (req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    } 

    const {error} = sendMessage.validate(req.body);
    if(error){
        console.log(error)
    return  res.json({success: false, error : error.details[0].message})
    }

 //check whether there is connection
 const checkConnection = ChatModel.findOne({
      _id:req.params.id
})

if(!checkConnection){
    return res.json({success: false, error: "you are not friends"})
}

  ChatModel.findOneAndUpdate({
      _id: req.params.id
    }, {$pushAll : {messages: {_id: req.body.id}}}, {
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



//delete all messages
route.delete('/deleteAll/:id', (req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    } 

    const {error} = sendMessage.validate(req.body);
    if(error){
        console.log(error)
    return  res.json({success: false, error : error.details[0].message})
    }

 //check whether there is connection
 const checkConnection = ChatModel.findOne({
      _id:req.params.id,
})

if(!checkConnection){
    return res.json({success: false, error: "you are not friends"})
}

  ChatModel.findOneAndUpdate({
      _id: req.params.id
    }, {messages: []}, {
      new: true
    })
    .then(doc => {
        console.log(doc)
        if(!doc){
           return res.json({success: false, error: "does not exists"})
        }
       return res.json({success: true, doc});
    })
    .catch(err => {
        res.json({success: false, message:err})
    })
  
  });


export default route;