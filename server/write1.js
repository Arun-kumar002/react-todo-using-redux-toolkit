const {model,Schema}=require('mongoose')
// const bcrypt=require('bcrypt')
// const jwt=require('jsonwebtoken')
// const {JWT_SECRET,JWT_EXPIRES} =require('../config/index')
const adminSchema=new Schema({
    
},{timestamps:true})

// adminSchema.pre('save',async function(){
//     let salt=await bcrypt.genSalt(10)
//     this.password=await bcrypt.hash(this.password,salt)
// })

// adminSchema.methods.generatetoken= function() {
//     let token=jwt.sign({id:this._id},JWT_SECRET,{expiresIn:JWT_EXPIRES})
//     return token
// }
module.exports=model('admin',adminSchema)