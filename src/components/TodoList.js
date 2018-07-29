import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const todos = this.props.todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          isDone= {todo.isDone}
          onChange={id => this.props.onChange(id)}
          onDelete={id => this.props.onDelete(id)}
        />
      );
    });
    return <div>{todos}</div>;
  }
}

export default TodoList;
