import React, { Component } from "react";

class Todo extends Component {
  state = {};
  render() {
    return (
        <div className={this.props.todo.done ? "done" : "undone"}>
              <p onClick={() => this.props.onTodoToggleClick(this.props.todo.title)}>
                {this.props.todo.title}
              </p>
              <button onClick={() => this.props.onDeleteClick(this.props.todo.title)}>
                Del
              </button>
            </div>
    );
  }
}

export default Todo;
