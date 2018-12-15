const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = "5c148a2f4b30fd2308d72069";

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
