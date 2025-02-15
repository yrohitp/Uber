const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullname:{
        firstname : {
            type: String,
            required: true,
            minlength:[3, 'First name must be at least 3 characters long']
        },
        lastname : {
            type: String,
            minlength:[3, 'Last name must be at least 3 characters long']
        }
    },
    email : {
        type: String,
        required: true,
        unique: true,
        minlength:[5, 'Email must be at least 5 characters long']
    },
    password : {
        type: String,
        required: true,
        select : false
    },
    socketId : {
        type: String
    },
});

userSchema.methods.generateAuthToken = function() {
    const token = JsonWebTokenError.sign({_id : this._id} ,process.env.JWT_SECRET , {expiresIn : '24h' });
    return token;
}

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password,this.password);
}

userSchema.static.hashPassword = async function (password)
{
    return await bycrypt.hash(password,10);
}

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;