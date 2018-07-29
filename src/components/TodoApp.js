import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class TodoApp extends Component {
  state = { todos: [] };

  SaveTodo = (e, todo) => {
    e.preventDefault();
    if (!todo) return;
    const newTodo = { text: todo, id: (new Date()).getTime().toString(), isDone:false };
    this.setState(prevState => {
      return { todos: prevState.todos.concat(newTodo) };
    });
  };

  onChange = (id)=>{
    this.setState(prevState => {
      return { todos: prevState.todos.map(todo=> todo.id===id ? {...todo, isDone:!todo.isDone} :todo) };
    });
  }

  onDelete = (id)=>{
    this.setState(prevState => {
      return { todos: prevState.todos.filter(todo=> todo.id!==id) };
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <TodoForm SaveTodo={this.SaveTodo} />
        <TodoList
          todos={this.state.todos}
          onChange={id => this.onChange(id)}
          onDelete={id => this.onDelete(id)}
        />
      </div>
    );
  }
}

export default TodoApp;
