const mongoose = require("mongoose");

const cabSchema = mongoose.Schema(
    {
        cabName: {
            type: String,
            required: true
        },
        expensiveIndex: {
            type: String,
            default: "1"
        },
        status: {
            type: String,
            default: "notBooked"
        },
        startTime: {
            type: Date,
            default: null
        },
        endTime: {
            type: Date,
            default: null
        }

    }
);

module.exports = mongoose.model("cabs", cabSchema);
