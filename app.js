var express=require('express');
var request=require('request');
var bodyparser=require('body-parser');
var app=express();

app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(bodyparser.json());


app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methods','GET,POST')
  res.header('Access-Control-Allow-Headers','Content-Type')
  next();
})


app.post('/login',function(req,res){

  var data=req.body;
  //console.log(data.username)
  request.post({url:'http://192.168.199.104:3000/api/user/login',form:{email:data.username,password:data.password}},function(err, httpResponse,body) {
    res.send(body);
  })
  //res.send({success:true})
});

app.get('/getItems',function(req,res){
  request.get({url:'http://192.168.199.104:3000/api/all_items'},function(err, httpResponse,body){
    //console.log(body)
    res.send(body);

  });
});

app.get('/getPics',function(req,res){
  request.get({url:'http://192.168.199.104:3000/api/item_pic'},function(err, httpResponse,body){
    //console.log(body)
    res.send(body);

  });
});


app.listen(3000,function(){
  console.log("listening 3000")
})
