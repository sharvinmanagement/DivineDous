const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name : {
        typeof:String,
        required: [true, "Please provied a name"],
        unique: true,
    },
    email : {
        typeof:String, 
        required: true
    },
    password : {
        typeof: Number, 
        required: true
    },
    isVerfied :{
        type:Boolean,
        default: false
    },
    isAdmin :{
        type:Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpriy: Date,
    verifyToken: String,
    verifyTokenExpiry:Date
},{timestamps: true})

const User = mongoose.models.users || mongoose.model('User', UserSchema)
export default User;