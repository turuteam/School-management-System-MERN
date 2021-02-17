import express from "express";
import Notifications from "../models/NoticeModel.js";

const route = express.Router();
//get all
route.get('/', async(req, res) => {
    const data = await Notifications.find();
    res.json(data);
})

//get one by id

//search by date n title

//add notice

//edit 

//delete

//delete all


export default route;