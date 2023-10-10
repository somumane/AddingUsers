const mongoose=require('mongoose')

const UsersSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    adress:{
        type:String
    }

})

module.exports=mongoose.model('Users',UsersSchema)