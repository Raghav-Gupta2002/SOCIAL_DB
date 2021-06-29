// const route=require('express').Router()
const {Router}=require('express')
const route=Router()
const {create_another_user,find_all_users,getuserbyid,getuserbyusername}=require('../../controllers/users')
const { users } = require('../../db/model')

route.get('/:id',async(req,res)=>{
    
let user
    if(isNaN(parseInt(req.params.id))){
        //get by username
        user=await getuserbyusername(req.params.id)
    }
    else{
        //get by id
        user=await getuserbyid(req.params.id)
    }

    if(user){
        res.status(200).send(user)
    }
    else{
        res.status(404).send({
            Error:'no such id or username found'
        })
    }
    
})

route.post('/',async(req,res)=>{
    const user =await create_another_user()
   res.status(201).send(user)
})

module.exports={
    userRoute:route
}