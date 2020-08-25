const mongoose = require("mongoose")
const Schema = mongoose.Schema
const InvestmentSchema = new Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    tier: {
        type: String,
        enum: ["gold", "silver", "bronze"]
    },
    amountInvested: {
        type: Number
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, 
{timestamps: true}
)

const Investment = mongoose.model("Investment", InvestmentSchema)

module.exports = Investment