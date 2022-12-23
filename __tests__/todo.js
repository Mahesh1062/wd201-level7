const request = require('supertest');
const db = require('../models/index');
const app = require('../app');
<<<<<<< HEAD
const cheerio = require('cheerio');

let server; let agent;

function fetchCsrfToken(res)
{
  var $ = cheerio.load(res.text);
  return $("[name=_csrf]").val();
}

describe('todo test suits', ()=>{
  beforeAll(async ()=>{
    await db.sequelize.sync({force: true});
    server = app.listen(process.env.PORT || 3000, ()=>{});
=======

let server; let agent;

describe('todo test suits', ()=>{
  beforeAll(async ()=>{
    await db.sequelize.sync({force: true});
    server = app.listen(3000, ()=>{});
>>>>>>> f1cfc91 (updated)
    agent = request.agent(server);
  });
  afterAll( async () =>{
    await db.sequelize.close();
    server.close();
  });
<<<<<<< HEAD
  test('Test the functionality of create a new todo item', async () => {
    const getResponse = await agent.get('/');
    const csrfToken = fetchCsrfToken(getResponse);
    const response = await agent.post('/todos').send({
      title: 'copyright year fixed',
      dueDate: new Date().toISOString(),
      completed: false,
      _csrf: csrfToken,
    });
    expect(response.statusCode).toBe(302);
  });
  test('Test the update functionality by updating the markAsCompleted', async () => {
    const getResponse = await agent.get('/');
    let csrfToken = fetchCsrfToken(getResponse);
    await agent.post('/todos').send({
      title: 'copyright year has been changed successfully',
      dueDate: new Date().toISOString(),
      completed: false,
      '_csrf': csrfToken,
    });
    const TodosItems = await agent.get('/').set('Accept', 'application/json');
    const TodosItemsParse = JSON.parse(TodosItems.text);
    const calculateTodosTodayITem = TodosItemsParse.dueToday.length;
    const Todo = TodosItemsParse.dueToday[calculateTodosTodayITem - 1];
    const boolStatus = Todo.completed ? false : true;
    anotherRes = await agent.get('/');
    csrfToken = fetchCsrfToken(anotherRes);

    const changeTodo = await agent.put(`/todos/${Todo.id}`)
    .send({_csrf: csrfToken, completed: boolStatus});

    const UpadteTodoItemParse = JSON.parse(changeTodo.text);
    expect(UpadteTodoItemParse.completed).toBe(true);
  });
  test('Test the delete functionality', async () => {
    const getResponse = await agent.get('/');
    let csrfToken = fetchCsrfToken(getResponse);
    await agent.post('/todos').send({
      title: 'Delete functionality checking',
      dueDate: new Date().toISOString(),
      completed: false,
      '_csrf': csrfToken,
    });
    const TodosItems = await agent.get('/').set('Accept', 'application/json');
    const TodosItemsParse = JSON.parse(TodosItems.text);
    const calculateTodosTodayITem = TodosItemsParse.dueToday.length;
    const Todo = TodosItemsParse.dueToday[calculateTodosTodayITem - 1];
    const boolStatus = Todo.completed ? false : true;
    anotherRes = await agent.get('/');
    csrfToken = fetchCsrfToken(anotherRes);

    const changeTodo = await agent.delete(`/todos/${Todo.id}`)
    .send({_csrf: csrfToken, completed: boolStatus});

    const boolResponse = Boolean(changeTodo.text);
    expect(boolResponse).toBe(true);
=======
  test('respond with json at /todos', async () =>{
    const response = await agent.post('/todos').send({
      'title': 'Buy Soda',
      'dueDate': new Date().toISOString(),
      'comppleted': false,
    });
    expect(response.statusCode).toBe(200);
    expect(response.header['content-type']).toBe(
        'application/json; charset=utf-8',
    );
    const parseResponse = JSON.parse(response.text);
    expect(parseResponse.id).toBeDefined();
  });

  test('Marks a todo with the given ID as complete', async () => {
    const response = await agent.post('/todos').send({
      title: 'Buy soda',
      dueDate: new Date().toISOString(),
      completed: false,
    });
    const parsedResponse = JSON.parse(response.text);
    const todoID = parsedResponse.id;

    expect(parsedResponse.completed).toBe(false);

    const markCompleteResponse = await agent
        .put(`/todos/${todoID}/markASCompleted`)
        .send();
    const parsedUpdateResponse = JSON.parse(markCompleteResponse.text);
    expect(parsedUpdateResponse.completed).toBe(true);
>>>>>>> f1cfc91 (updated)
  });
});