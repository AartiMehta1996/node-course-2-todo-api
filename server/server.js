var express = require('express');
var bodyParser =require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app =  express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text:req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);
    //console.log(err);
  });
  //console.log(req.body);
});

app.listen(3000,()=>{
  console.log('Started on port 3000');
});

module.exports = {app};










// var u = new User({
//   email:"abc@gmail.com"
// });
// u.save().then((doc)=>
// {
//   console.log('doc',doc);
// },(e)=>{
//   console.log(e);
// });
// var newTodo = new todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc)=>
// {
//   console.log('Saved todo',doc);
// },(e) =>
// {
//   console.log("Error ::" ,e);
// });
//
// var newTodo2 = new todo({
//   text:'  Edit this video  '
// });
//
// newTodo2.save().then((doc)=>
// {
//   console.log('Saved todo',doc);
// },(e) =>
// {
//   console.log("Error ::" ,e);
// });
