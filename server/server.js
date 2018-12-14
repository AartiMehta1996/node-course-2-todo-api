var express = require('express');
var bodyParser =require('body-parser');
var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app =  express();
const port = process.env.PORT || 3000;
//const port=3000;
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
//to fetch Todos
app.get('/todos',(req,res) =>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  });
});


app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id))
  {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  })
});

app.listen(port,()=>{
  console.log(`Started on port ${port}`);
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
