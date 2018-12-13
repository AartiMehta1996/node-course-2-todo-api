// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
// var Obj=new ObjectID;
// console.log(Obj);
// var user={name:'andrew',age:25};
// var {name}=user;
// var {age} = user;
// console.log(name,age);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err)
  {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected...');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed : false
  // },(err,result) =>
  // {
  //   if(err)
  //   {
  //     return console.log('Error in insert',err);
  //   }
  //   console.log("Create and Inserted ...",JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name:'abcd',
  //   age: 25,
  //   location: 'India'
  // },(err,result)=>
  // {
  //   if(err){
  //     return console.log("Unable to insert",err);
  //   }
  //   //"Inserted::",JSON.stringify(,undefined,2)
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  db.close();
});
