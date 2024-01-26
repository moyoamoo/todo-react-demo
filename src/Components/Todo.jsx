import React, { Component } from "react";

class Todo extends Component {
  state = {};
  render() {

    const {todo, onTodoToggleClick, onDeleteClick} = this.props;
    return (
        <div className={todo.done ? "done" : "undone"}>
              <p onClick={() => onTodoToggleClick(this.props.todo.title)}>
                {todo.title}
              </p>
              <button onClick={() => onDeleteClick(this.props.todo.title)}>
                Del
              </button>
            </div>
    );
  }
}

export default Todo;
