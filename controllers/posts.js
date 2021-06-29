const {posts,users, }=require('../db/model')

async function createnewposts(userId,title,body){
    const post=await posts.create({
       title,
      body,
      userId,
    })
    return post
}

async function findallposts(){

    const post=await posts.findAll({
        include: [ users ]
    })
    return post
}

module.exports={
    createnewposts,
    findallposts
}
// async function task1(){
// console.log(await createnewposts(
//     1,
//     'title of the post',
//     'some body of the post'
// ))
// console.log(await createnewposts(
//     4,
//     'another title of the post',
//     'another body of the post'
// ))

// }
// task1()
// async function task(){
// const post = await findallposts()
//   for (let p of post) {
//     console.log(`${p.title}\nauthor: ${p.user.username}\n${p.body}\n==========\n`)
//   }
// }
// task()