const cabSchema = require("../models/cab")
const router = require("express").Router();
const getShortestPath = require('./getShortestPath.js')
const userSchema = require("../models/user")
const Sib = require('sib-api-v3-sdk')
require('dotenv').config()
const client = Sib.ApiClient.instance
const apikey = client.authentications['api-key']
apikey.apikey = process.env.API_KEY
const tranEmailApi = new Sib.TransactionalEmailsApi()
exports.registerCab = async (req, res) => {
    try {
        const cabName = req.body.cabName;
        // const status = req.body.status;
        // const startTime = req.body.startTime;
        // const endTime = req.body.endTime;
        let doc = await cabSchema.findOne({ cabName: cabName })
        // console.log(doc);
        if (!doc) {
            const user = new cabSchema({
                cabName: cabName,
            });
            await user.save();
            return res.status(200).json({ msg: "Cab Added SuccessFully" });

        } else if (doc) {
            return res.status(400).json({ msg: " Cab Already Exist" });
        }
    }
    catch (error) {
        // return r
        // return res.status(500).json({ msg: " Err" });
        throw error;
    }
    // const sender = {
    //     email: "zsd5@gmail.com"
    // }
    // const receiver = [
    //     {
    //         email: "xyz373@gmail.com"
    //     }
    // ]
    //     tranEmailApi.sendTransacEmail({
    //         sender,
    //         to: receiver,
    //         subject: "CABz Booking ",
    //         textContent: `Cab Booked Enjoy`
    //     }).then(console.log).catch(console)

    // }
    // catch (error) {
    //     throw error;
    // }
}
exports.getMinDist = async (req, res) => {
    try {
        const source = req.params.source;
        const destination = req.params.dest;
        // console.log(destination);
        const data = getShortestPath.shortestPath(source, destination);
        console.log(data);
        return res.status(200).json(data);
    }
    catch (error) {
        // return r
        // return res.status(500).json({ msg: " Err" });
        throw error;
    }

}
exports.availableCar = async (req, res) => {

    try {

        let doc = await cabSchema.find({ status: "notBooked" })
        // console.log(doc);
        return res.status(200).json({ doc });
        //    res.status
    }
    catch (error) {
        throw error;
    }
}
exports.updateStatus = async (req, res) => {

    try {
        let cabName = req.body.cabName;
        let email = req.body.email;
        let fullName = req.body.fullName;
        let time = req.body.time;
        // console.log(cabName);
        // console.log(email);
        // console.log(fullName);
        // console.log(time);
        let doc = await userSchema.findOne({ email: email })
        // console.log(doc);

        let startTime = new Date();
        let endTime = new Date();
        endTime.setMinutes(endTime.getMinutes() + time);
        // console.log(startTime.getTime() < endTime.getTime());//compare time
        // console.log(startTime);
        // console.log(endTime);
        if (!doc) {
            const user = new userSchema({
                fullName: fullName,
                email: email,
                statuss: "travelling",
                startTime: startTime,
                endTime: endTime
            });
            await user.save();
        }


        // console.log(cabName);
        await cabSchema.updateOne({ cabName: cabName }, { $set: { status: "booked", startTime: startTime, endTime: endTime } })
        // console.log(doc);

        return res.status(200).json({ msg: "Updated" });


    }
    catch (error) {
        throw error;
    }
}

exports.cabStatus = async (req, res) => {
    try {

        const cabName = req.params.cabs;
        // console.log(cabName);
        let doc = await cabSchema.find({ cabName: cabName })
        // console.log(doc);
        return res.status(200).json(doc);
    }
    catch (e) {
        throw e;
    }
}