const mongoose = require("mongoose")
const Schema = mongoose.Schema
const DepositSchema = new Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    amount: {
        type: Number
    },
    status: {
        type: String,
        default: pending,
        enum: ['pending', 'processed']
    },
    paymentMode: {
        type: String
    },
}, 
{timestamps: true}
)

const Deposit = mongoose.model("Deposit", DepositSchema)

module.exports = Deposit