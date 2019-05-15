var express=require('express');
var app=express();

// var things=require('./things.js');

// app.use('/things',things);
// app.get('/hello',function(req,res){
//     res.send("Hello!");
//     console.log(req.url);
// });



// app.use('/:name/',function(req,res,next){
//     //res.write("Inside first middleware " + Date.now());
//     console.log("Inside first middleware " + Date.now());
//     next();
// },
// function(req,res,next){
//     //res.write("Inside second middleware "+Date.now());
//     console.log("Inside second middleware "+Date.now());
//     next();
// },
// function(req,res,next){
//     //res.write("Inside third middleware function "+Date.now());
//     console.log("Inside third middleware function "+Date.now());
//     next();
// }
// );



// app.post('/hello',function(req,res){
//     res.send("You made a post request here!");
// });
// app.get('/:name/:id',function(req,res){
//     res.write("The name is "+req.params.name+" and the id specified is "+req.params.id);
//     res.end();
// });
app.set('view engine', 'pug');
app.set('views','./views');
app.get('/first_template', function(req, res){
    res.render('first_view');
 });

app.listen(3000);