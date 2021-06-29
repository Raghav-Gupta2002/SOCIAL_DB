const {Router}=require('express')
const route=Router()

const {findallposts,createnewposts}=require('../../controllers/posts')
const {commentRoute}=require('./comment')
route.use('/comments',commentRoute)

route.get('/',async(req,res)=>{

    const posts=await findallposts()
    res.status(200).send(posts)
})
route.post('/',async(req,res)=>{
const{userId,title,body}=req.body
if ((!userId) || (!title) || (!body)) {
    return res.status(400).send({
      error: 'Need userid, title and body to create post'
    })
  }

  const post = await createnewposts(userId, title, body)
  res.status(201).send(post)

})
module.exports={
    postRoute:route
}