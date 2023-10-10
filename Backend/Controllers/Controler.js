const usersmodel=require('../Models/Model')

module.exports.users= async (req,res)=>{
    const users=await usersmodel.find()
    res.send(users)
} 

module.exports.adduser= async (req,res)=>{
    const {name}=req.body
    const {number}=req.body
    const {email}=req.body
    const {adress}=req.body
    usersmodel
    .create({name,number,email,adress})
    .then((data)=>{
        console.log("Added Succes");
        console.log(data);
        res.send(data)
    })
    .catch(err=>console.log(err))
} 

module.exports.updateuser=async(req,res)=>{
    const {_id,name,number,email,adress}=req.body
    usersmodel.findByIdAndUpdate(_id,{name,number,email,adress})
    .then(()=>{res.send("Updated Succesfully")})
    .catch(err=>console.log(err))
}
module.exports.deleteuser=async(req,res)=>{
    const {_id}=req.body
    usersmodel.findByIdAndDelete(_id)
    .then(()=>{res.send("Deleted Succesfully")})
    .catch(err=>console.log(err))
}