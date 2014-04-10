//var controller = Todos.TodoController;
//
//var model = controller.get('model');
//console.log(model);

test("a Todo begins with completed set to false", function(){
  var todo = Todos.Todo.store.createRecord('todo', {
    title: 'title',
    priority: 'Could',
    isCompleted: false
  });
  equal(todo.get('isCompleted'), false);
});

test("when a Todo's title changes it automatically saves", function(){
  var todo = Todos.Todo.store.createRecord('todo', {
    title: 'title',
    priority: 'Could',
    isCompleted: false
  });

  todo.set('title', 'a new title');

  var result =  todo.get('title');
  equal(result, 'a new title', "New title is " + result);
});

test("when a Todo's priority changes it automatically saves", function(){
  var todo = Todos.Todo.store.createRecord('todo', {
    title: 'title',
    priority: 'Could',
    isCompleted: false
  });

  todo.set('priority', 'Must');

  var result =  todo.get('priority');
  equal(result, 'Must', "New priority is " + result);
});

test("when a Todo's completed status changes it automatically saves", function(){
  var todo = Todos.Todo.store.createRecord('todo', {
    title: 'title',
    priority: 'Could',
    isCompleted: false
  });

  todo.toggleProperty('isCompleted');

  var result =  todo.get('isCompleted');
  equal(result, true, "Status is " + result);
});