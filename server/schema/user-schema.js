import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment';

// for authentication...

const userSchema=  mongoose.Schema({

    name:String,
    username:String,
    email:String,
    phone:String
})

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'user');


const user = mongoose.model('user',userSchema);

export default user;