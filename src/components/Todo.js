import React, { Component } from "react";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import "./Todo.css";

class Todo extends Component {
  state = {};
  handleChange = e => {
    this.setState({ checked: e.target.checked });
    this.props.onChange(this.props.id);
  };
  render() {
    console.log(this.props.isDone);
    return (
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleChange}
            />
          }
          classes={{ root: this.props.isDone ? "todoDone" : "" }}
          label={this.props.text}
        />
        <Button
          variant="fab"
          mini
          aria-label="Delete"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          <DeleteIcon />
        </Button>
      </div>
    );
  }
}
Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onDelete: PropTypes.func
};
export default Todo;
