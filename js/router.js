/*global Ember, Todos */
(function () {
	'use strict';

	Todos.Router.map(function () {
		this.resource('todos', { path: '/' }, function () {
			this.route('must');
			this.route('should');
			this.route('could');
		});
	});

	Todos.TodosRoute = Ember.Route.extend({
		model: function () {
			return this.store.find('todo');
		}
	});

	Todos.TodosIndexRoute = Ember.Route.extend({
		setupController: function () {
			this.controllerFor('todos').set('filteredTodos', this.modelFor('todos'));
		}
	});

	Todos.TodosMustRoute = Ember.Route.extend({
		setupController: function () {
			var todos = this.store.filter('todo', function (todo) {
				return todo.get('priority') == "Must";
			});

			this.controllerFor('todos').set('filteredTodos', todos);
		}
	});

	Todos.TodosShouldRoute = Ember.Route.extend({
		setupController: function () {
			var todos = this.store.filter('todo', function (todo) {
				return todo.get('priority') == "Should";
			});

			this.controllerFor('todos').set('filteredTodos', todos);
		}
	});

	Todos.TodosCouldRoute = Ember.Route.extend({
		setupController: function () {
			var todos = this.store.filter('todo', function (todo) {
				return todo.get('priority') == "Could";
			});

			this.controllerFor('todos').set('filteredTodos', todos);
		}
	});
})();
