const express=require('express');
const app=express();
const port=  3000;
const path=require('path');
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../views");


app.set('view engine', 'hbs');
app.set('views ',template_path);
app.use(express.static(static_path));



app.get(" ",function(req,res){
    res.render('index');

});
app.get("/about",function(req,res){
    res.render('about');

});
app.get("/weather",function(req,res){
    res.render('weather');

});  
app.get("*",function(req,res){
    res.send("Error 404 Page,your address is wrong");

});
app.listen(port,()=>{
    console.log(`Listening to port at ${port}`);
})
