(function() {
	'use strict';

	var React = require('react');
	var Router = require('react-router');
	var Link = Router.Link;

	var TodoList = React.createClass({
		propTypes: {
			todos: React.PropTypes.array.isRequired
		},

		render: function() {

			var createTodoRow = function(todo) {
				return (
					<tr key={todo.id}>
					<td><Link to="editTodo" params={{id: todo.id}}>{todo.id}</Link></td>
						<td>{todo.title}</td>
						<td>{todo.description}</td>
					</tr>
				);
			};

			return (
				<div>
					<table className="table">
						<thead>
							<th>ID</th>
							<th>Name</th>
							<th>Due Date</th>
						</thead>
						<tbody>
							{this.props.todos.map(createTodoRow, this)}
						</tbody>
					</table>
				</div>
			);
		}
	});

	module.exports = TodoList;
})();
