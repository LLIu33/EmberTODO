/*global Todos, Ember */
(function () {
  'use strict';

  Todos.TodosController = Ember.ArrayController.extend({
    actions: {
      createTodo: function () {
        var title, priority, todo;

        // Get the todo title set by the "New Todo" text field
        title = this.get('newTitle').trim();
        if (!title) {
          return;
        }

        priority = "Could";

        // Create the new Todo model
        todo = this.store.createRecord('todo', {
          title: title,
          priority: priority,
          isCompleted: false
        });
        todo.save();

        // Clear the "New Todo" text field
        this.set('newTitle', '');
      },
    },

    /* properties */
    remaining: Ember.computed.filterBy('content', 'isCompleted', false),
    completed: Ember.computed.filterBy('content', 'isCompleted', true),

    allAreDone: function (key, value) {
      if (value !== undefined) {
        this.setEach('isCompleted', value);
        return value;
      } else {
        var length = this.get('length');
        var completedLength = this.get('completed.length');

        return length > 0 && length === completedLength;
      }
    }.property('length', 'completed.length')
  });
})();
