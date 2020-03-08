const express= require('express');
const bodyParser=require('body-parser')
const app= express();
const port=3000

// parsing data html form always url encoded!, extended true= allow to post nested objects
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html")
});




app.post("/", function(req, res){
  var num1= Number(req.body.num1);
  var num2=Number(req.body.num2);
  var result=num1+num2;
  res.send("the result of the calculation is " + result)
  console.log(result);
});


app.listen(3000, function(){
  console.log("server started on port 3000");
});
