(function() {
	'use strict';

	var React = require('react');
	var Router = require('react-router');

	var DefaultRoute = Router.DefaultRoute;
	var Route = Router.Route;
	var NotFoundRoute = Router.NotFoundRoute;
	var Redirect = Router.Redirect;

	var routes = (
		<Route name="app" path="/" handler={require('./components/app')}>
			<DefaultRoute handler={require('./components/homePage')} />
			<Route name="todo-list" handler={require('./components/todo/todoPage')} />
			<Route name="addTodo" path="todo"
				handler={require('./components/todo/editTodo')} />
			<Route name="editTodo" path="todo/:id"
				handler={require('./components/todo/editTodo')} />
			<Route name="about" handler={require('./components/about/aboutPage')} />
			<NotFoundRoute handler={require('./components/notFoundPage')} />
			<Redirect from="list" to="todo-list" />
			<Redirect from="todos" to="todo-list" />
		</Route>
	);

	module.exports = routes;
})();
