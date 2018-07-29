import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./TodoForm.css";

class TodoForm extends Component {
  state = { todo: "" };
  handleChange = e => {
    this.setState({ todo: e.target.value });
  };
  onSubmit = e => {
    this.props.SaveTodo(e, this.state.todo);
    this.setState({ todo: "" });
  };
  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <TextField
          id="todo"
          label="what Todo?"
          onChange={this.handleChange}
          value={this.state.todo}
        />
        <span className="margin10">
          <Button variant="outlined" color="primary" type="submit">
            Add new todo
          </Button>
        </span>
      </form>
    );
  }
}

export default TodoForm;
