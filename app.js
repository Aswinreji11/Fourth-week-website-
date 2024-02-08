const express = require('express');
const session = require('express-session');
const { cookie } = require('express-validator');
const { secret } = require('parse');
const nocache = require('nocache');
const mongoose = require('mongoose');

// express app
const app = express();

//nocache middleware
app.use(nocache())

//making files public
app.use(express.static('public'))

// view engine embbeded js
app.set('view engine', 'ejs')

//listening requests
app.listen(3000,()=>{
    console.log('server is running')
})

//middleware 
app.use(express.urlencoded({extended:true}))

// section middleware
app.use(session({
    secret:'key that will sign cookie',  
    resave:false,
    saveUninitialized:false,   
}))
var welcome = welcome
app.get('/',(req,res)=>{
    if(req.session.isAuth){
        res.redirect('/home')
    }else{
        res.redirect('/login')
    } 
})

app.get('/login',(req,res)=>{
    if(req.session.isAuth){
        res.redirect('/home')
    }else{
        const message = req.session.error
        res.render('login',{errorMessage:message})
    }
})



const data = { user:'aswin' , pass: '1234'}

app.post('/login',(req,res)=>{  
    
    // console.log(req.body)
    if( data.user === req.body.name && data.pass === req.body.password){
        req.session.isAuth = true;
        res.redirect('/') 
    }else{
        req.session.error = "Invalid Credentials"
        res.redirect('/login')
    }
})


app.get('/home',(req,res)=>{
    if(req.session.isAuth){
        res.render('index',{uname:data.user,date:new Date().toLocaleTimeString()})
    }else{
        res.redirect('/')
    }
   
})

app.get('/logout',(req,res)=>{
     req.session.destroy()
    res.redirect('/')
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})




//practice 

// app.get('/login',(req,res)=>{
//     res.render('login')
// })

// let user = {name:'aswin',password:'4444'}

// app.post('/login',(req,res)=>{
//     if(user = req.body){
//         res.send(req.body)
//     }
//      console.log(req.body)
    
// })
 


