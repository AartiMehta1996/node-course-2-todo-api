const supertest = require('supertest');
///var mocha = require('mocha');
const expect = require('expect');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

//const {User} = require('./../models/user');

const todos = [{
  text:'First test todo'
},{
  text:'Second test todo'
}];

beforeEach((done)=>{
  Todo.remove({}).then(()=>{
    return Todo.insertMany(todos);
  }).then(()=>done());
});
describe('POST /todos',() => {
  it('should create a new todo', (done) => {
    var text = "Test todo text";

    supertest(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res)=>{
        expect(res.body.text).toBe(text);
      })
      .end(( err, res) => {
        if(err){
          return done(err);
      }

      Todo.find({text}).then((todos)=>
      {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
      }).catch((e)=>done(e));
    });
  });
});
