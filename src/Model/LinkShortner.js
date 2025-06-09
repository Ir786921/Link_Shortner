const mongoose = require('mongoose');

const ShortnerSchema =  new mongoose.Schema({
    originalUrl : {
        type:String,
        required:true,

    },
    code:{
        type : String,
        required : true
    }
}, {timestamps : true});

export const Shortener = mongoose.models.Shortener || mongoose.model("Shortener" ,ShortnerSchema);

