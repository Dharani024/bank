var express=  require ('express')

var app= express();

app.use(express.static('public'))

 app.get("/", function(req,res){
     res.send("HE");
  })
  app.get("/data", function(req,res){
    res.send("****");
 })
 app.listen(4000, function(req,res){
    console.log("Running at port 4000")
 });