import React, { Component } from "react";
import Todo from "./Todo";

class Interface extends Component {
  render() {
    return (
      <>
        <input type="text" onInput={this.props.onTodoInput} />
        <button onClick={this.props.onAddClick}>Add</button>
        <h1>Total todos: {this.props.totalTodos}</h1>
        {this.props.todos.map((todo) => {
          return (
          <Todo
          todo={todo}
          onTodoToggleClick={this.props.ComponentonTodoToggleClick}
          onDeleteClick={this.props.onDeleteClick}/>
          );
        })}
        <button onClick={this.props.onDeleteAll}>Delete All</button>
      </>
    );
  }
}

export default Interface;
