const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID}= require('mongodb');
// Todo.remove({}).then((result) =>
// {
//   console.log(result);
// })

//Todo.findOneAndRemove

Todo.findByIdAndRemove('5c1490605a0d99d814cd9c9e').then((todo)=>{
console.log(todo)
});
