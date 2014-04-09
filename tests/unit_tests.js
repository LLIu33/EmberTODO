test("a Todo begins with completed set to false", function(){
  var todo = Todos.Todo.create();
  equal(todo.get('completed'), false);
});

test("when a Todo's title changes it automatically saves", function(){
  var todo = Todos.Todo.create();

  Ember.run(function(){
    todo.set('title', 'a new title');
  });

  var result =  todo.get('title');

  equal(result, 'a new title', "New title is " + result);
});

test("when a Todo's priority changes it automatically saves", function(){
  var todo = Todos.Todo.create();

  Ember.run(function(){
    todo.set('priority', 'Must');
  });

  var result =  todo.get('priority');

  equal(result, 'a new title', "New priority is " + result);
});

test("when a Todo's completed status changes it automatically saves", function(){
  var todo = Todos.Todo.create();

  Ember.run(function(){
    todo.toggleProperty('completed');
  });

  var result =  todo.get('isCompleted');

  equal(result, true, "Status is " + result);
});