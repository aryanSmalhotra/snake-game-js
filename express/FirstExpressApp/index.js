
    const express = require('express');
    const app = express()
    const path = require('path');
    const redditData = require('./data.json')

    



    //app.use('/',(req,res) => {
        //console.log("Send message")
    //res.send("Welcome To GamePedia.com")
    


    //})
    app.set('view engine', 'ejs');
    app.set('views',path.join(__dirname,'/views'))

    
    app.get('/r/:subreddit',(req,res) => {
        const {subreddit} = req.params
        const data = redditData[subreddit];
        console.log(data)
        res.render('subreddit', {subreddit});
    })
    
    app.get('/',(req,res)=>{
        console.log('KnowYourGames req incoming')
        res.send('Welcome to KnowYourGames.com!!')
    })
    app.get('/rand',(req,res) => {
        const num = Math.floor(Math.random()*100)+1;
        res.render('random',{UwU: num})
    })
    

    app.listen(8080, () => { 
        console.log("User Icoming")
    })