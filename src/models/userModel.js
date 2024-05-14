const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provied a name"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provied a email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provied a password"]
    },

    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpriy: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

const Users = mongoose.models.users || mongoose.model('users', UserSchema)
export default Users;