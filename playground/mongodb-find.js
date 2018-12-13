// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err)
  {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected...');
  // db.collection('Todos').find({
  //   _id:new ObjectID('5c1246d6c60bc546fc417e7d')
  // }).toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log("Error::",err);
  // });
  //db.close();
  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos count::${count}`);
  },(err)=>
  {
    console.log(err);
  });

  db.collection('Users').find({
    name:"abcd"
  }).toArray().then((docs) =>{
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>
  {
    console.log(err);
  })
});
