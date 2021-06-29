
const Sequelize=require('sequelize')
const db=new Sequelize({
    dialect: 'mysql',
    database: 'cbsocialmediadb',
    username: 'cbsocialuser',
    password: 'cbsocialpass',
})
const COL_ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}
const COL_USERNAME_DEF={
    type: Sequelize.DataTypes.STRING(30),
    allowNull:false,
    unique:true
}
const COL_TITLE_DEF = {
    type: Sequelize.DataTypes.STRING(140),
    allowNull: false
}

const users=db.define('user',{
    id:COL_ID_DEF,
    username:COL_USERNAME_DEF

})
const posts=db.define('post',{
    id:COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
            type:Sequelize.DataTypes.TEXT,
            allowNull:false    }
})
const comments=db.define('comment',{
    id:COL_ID_DEF,
    title: COL_TITLE_DEF,
    body:{
        type:Sequelize.DataTypes.TEXT('tiny')
    }
})

users.hasMany(posts)
posts.belongsTo(users)

posts.hasMany(comments)
comments.belongsTo(posts)

users.hasMany(comments)
comments.belongsTo(users)
// db.sync({force:true})
// .then( ()=>{
    
//         console.log('database created');
//     })

// .catch((err)=>{
//     console.log(new Error('could not start database'));
//     console.log(err);
// })



module.exports={
db,users,posts,comments,
}
