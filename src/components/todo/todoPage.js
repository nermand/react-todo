(function() {
	'use strict';

	var React = require('react');
	var Router = require('react-router');
	var Link = Router.Link;
	var TodoList = require('./todoList');
	var ApiConstants = require('../../constants/api');

	var TodoPage = React.createClass({

		getTodoData: function(cb) {
			$.get(ApiConstants.uri + 'todos', function(res) {

				var todos = res.map((t) => {
					return {
						id: t.id,
						title: t.title,
						description: t.dueDate
					};
				});

				cb(todos);
			});
		},

		getInitialState: function() {
			return {
				todos: []
				// todos: [
				// 	{id: 1, title: 'Do the laundry',
				// 		description: 'Don\'t mix colored laundry with whites'},
				// 	{id: 2, title: 'Wash the dishes',
				// 		description: 'You can use washdisher today'}
				// ]
			};
		},

		componentDidMount: function() {
			this.getTodoData((todos) => {
				this.setState({todos: todos });
			});
		},

		render: function() {
			return (
				<div>
					<h1>Complete list of Todos</h1>
					<Link to="addTodo" className="btn btn-default">Add Todo</Link>
					<TodoList todos={this.state.todos} />
				</div>
			);
		}
	});

	module.exports = TodoPage;
})();
