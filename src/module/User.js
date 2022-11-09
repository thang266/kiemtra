const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const User = new Schema({
    EnableFCM: {
        type:String
    },
    Avatar:{
        type: String,
    },
    Banner:{
        type:String,
    },
    Fullname:{
        type:String,
    },
    TypeUser:{
        type:String
    },
    IdProvince:{
        type:String
    }
})
module.exports = mongoose.model('User',User)