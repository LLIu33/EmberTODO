/*global Todos, DS */
(function () {
	'use strict';

	Todos.Todo = DS.Model.extend({
		title: DS.attr('string'),
		priority: DS.attr('string'),
		isCompleted: DS.attr('boolean')
	});
})();

Todos.Todo.FIXTURES = [
	{
		id: 1,
		title: 'Learn Ember.js',
		priority: "Must",
		isCompleted: true
	},
	{
		id: 2,
		title: '...',
		priority: "Should",
		isCompleted: false
	},
	{
		id: 3,
		title: 'Profit!',
		priority: "Could",
		isCompleted: false
	}
];