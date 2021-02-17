import express from "express";
import Notifications from "../models/NotificationMessageModel.js";

const route = express.Router();
//get all
route.get('/', async(req, res) => {
    const data = await Notifications.find();
    res.json(data);
})

//add notifications


//remove one notification


//remove all


export default route;