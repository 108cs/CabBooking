const userSchema = require("../models/user")
const router = require("express").Router();

exports.registerUser = async (req, res) => {
    try {
        const fullName = req.body.fullName;
        const email = req.body.email;
        // const status = req.body.status;
        // const startTime = req.body.startTime;
        // const endTime = req.body.endTime;
        let doc = await userSchema.findOne({ email: email })
        // console.log(doc);
        if (!doc) {
            const user = new userSchema({
                fullName: fullName,
                email: email,
            });
            await user.save();
            return res.status(200).json({ msg: "User Added SuccessFully" });

        } else if (doc) {
            return res.status(400).json({ msg: " User Already Exist" });
        }
    }
    catch (error) {
        // return r
        // return res.status(500).json({ msg: " Err" });
        throw error;
    }
};
// exports.updateUserStatus = async (req, res) => {

//     try {
//         let email = req.body.email;
//         let doc = await userSchema.updateOne({ email: "anuragraushan373@gmail.com" }, { $set: { statuss: "travelling" } })
//         // console.log(doc);
//         return res.status(200).json({ msg: "Updated" });
//         //    res.status
//     }
//     catch (error) {
//         throw error;
//     }
// }