const express=require('express')
const path=require('path')
const {db}=require('./db/model')
const app=express()

const {userRoute}=require('./routes/users')
const {postRoute}=require('./routes/posts')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use( '/',express.static(__dirname +'/public'))
app.use('/api/users',userRoute)
app.use('/api/posts',postRoute)

db.sync()
    .then( ()=>{
        app.listen(4000, ()=>{
            console.log('server started on http://localhost:4000');
        })
    })
    .catch((err)=>{
        console.log(new Error('could not start database'));
        console.log(err);
    })
    