const {comments,posts,user}=require('../db/model')

async function createnewcomment(body,title,postId,userId){

  const comment=await comments.create({
      title,
      body,
      userId,
      postId,
  })
  return comment
}

async function findAllCommentsOnPost(postId){
    console.log(postId);
 const comment =await comments.findAll({
     where:{postId},
    //  include: [ users ],
    //  include: [posts]
     
 })
 
   return comment
}
module.exports={
    findAllCommentsOnPost,
    createnewcomment
}