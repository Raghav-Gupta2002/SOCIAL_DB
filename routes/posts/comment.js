const {Router}=require('express')
const route=Router()

const {createnewcomment,findAllCommentsOnPost}=require('../../controllers/comments')

route.get('/:id',async(req,res)=>{
// const{postId}=parseInt(req.params.id)

   const comment=await findAllCommentsOnPost(req.params.id)
   
   res.status(200).send(comment)
})

route.post('/',async(req,res)=>{
    const{title,body,userId,postId}=req.body
    if ((!userId) || (!title) || (!body)|| (!postId)) {
        return res.status(400).send({
          error: 'Need userid, title ,body and postId to create comment'
        })
      }
    const comment =await createnewcomment(body,title,postId,userId)
    res.status(201).send(comment)
})
module.exports={
    commentRoute:route
}