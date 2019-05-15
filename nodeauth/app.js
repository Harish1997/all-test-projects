const express=require('express');
const jwt=require('jsonwebtoken');

const app=express();

var movies = [
    {id: 101, name: "Fight Club", year: 1999, rating: 8.1},
    {id: 102, name: "Inception", year: 2010, rating: 8.7},
    {id: 103, name: "The Dark Knight", year: 2008, rating: 9},
    {id: 104, name: "12 Angry Men", year: 1957, rating: 8.9}
 ];
 app.get('/api/movies',(req,res)=>{
     res.json(movies);
 })
app.post('/api/posts',verifyToken,(req,res)=>{
    jwt.verify(req.token,"secretkey",(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                message:"Post created..",
                authData:authData
            });
        }
    });
    res.json({
        message:"Welcome to my API"
     })
});

app.post('/api/login',(req,res)=>{
    const user={
        id:1,
        username:"Harish",
        email:"harish@gmail.com"
    }
    jwt.sign({user:user},'secretkey',{expiresIn:'30s'},(err,token)=>{
        res.json({
            token:token
        });
    });
});


//token verification middleware
function verifyToken(req,res,next){
    const bearerHeader=req.headers['authorization'];
    if(typeof bearerHeader!=="undefined"){
        const bearer=bearerHeader.split(' ');

        const bearerToken=bearer[1];

        req.token=bearerToken;
        console.log("Verification success");
        next();
    }
    else{
        res.sendStatus("Forbidden");
    }
}

app.listen(5000,()=>{
    console.log("Server started on 5000");
});