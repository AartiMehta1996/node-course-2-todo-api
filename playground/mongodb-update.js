// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err)
  {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected...');
  // db.collection('Todos').findOneAndUpdate(
  //   {_id :new ObjectID("5c13369b85817de02292bd28")
  // },{
  //     $set:
  //     {
  //       completed:true
  //     }
  //   },{
  //     returnOriginal : false
  //   }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate(
    {
      _id : new ObjectID("5c124a92d8a3144ae4af12d1")
    },{
      $set:
      {
        name:"pqr"
      },
      $inc:{
        age:1
      }
    },
      {
        returnOriginal:false
      }).then((result)=>{
        console.log(result);
      })
});
