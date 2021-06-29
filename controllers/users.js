const {users}=require('../db/model')
const {random_username_generator}=require('../utils/username')

async function create_another_user(){
const user= await users.create({
    username:random_username_generator(),
})
  return user
}

async function find_all_users(){
const user=await users.findAll()
 return user
}

async function getuserbyid(id){
  return await users.findOne({where:{id}})
} 
async function getuserbyusername(username){
  return await users.findOne({where:{username}})
} 
module.exports={
  getuserbyid,
  getuserbyusername,
  create_another_user,
  find_all_users,
}


// async function task(){
//     console.log(await create_another_user());
//     console.log(await create_another_user());
//     console.log(await create_another_user());
//     console.log(await create_another_user());
// }
// task()