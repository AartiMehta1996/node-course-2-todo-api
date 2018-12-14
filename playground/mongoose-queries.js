const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = "6c137fd0abc9a6202b0d51a2";

Todo.find({
  _id: id
}).then((todos)=>{
  console.log('Todos',todos);
});

Todo.findOne({
   _id: id
}).then((todo)=>{
  console.log('Todos',todo);
});

Todo.findById(id).then((todo)=>{
  console.log('Todos',todo);
});
