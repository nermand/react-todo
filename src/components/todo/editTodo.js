(function() {
	'use strict';

	var React = require('react');
	var Router = require('react-router');
	var Link = Router.Link;
	var ApiConstants = require('../../constants/api');

	var EditTodo = React.createClass({

		getInitialState: function() {
			return {
				todo: { id: '', title: '', description: '' },
				errors: {},
				dirty: false
			};
		},

		componentDidMount: function() {
			var todoId = this.props.params.id; //from the path '/todo:id'

			if (todoId) {
				this.getTodoById(todoId, (todo) => {
					this.setState({todo: todo });
				});
			}
		},

		render: function() {
			return (
				<div>
					<h1>Edit Todo</h1>
					<span>
						<label>ID: {this.state.todo.id}</label><br />
						<label>Title: {this.state.todo.title}</label><br />
						<label>Due date: {this.state.todo.dueDate}</label>
					</span>
				</div>
			);
		},

		getTodoById: function(todoId, cb) {
			$.get(ApiConstants.uri + 'todos/' + todoId, function(todo) {
				cb(todo);
			});
		}
	});

	module.exports = EditTodo;
})();
