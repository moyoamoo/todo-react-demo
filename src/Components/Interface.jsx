import React, { Component } from "react";
import Todo from "./Todo";

class Interface extends Component {
  render() {

    const {onTodoInput, onAddClick, totalTodos, todos, onTodoToggleClick, onDeleteClick, onDeleteAll} = this.props;

    return (
      <>
        <input type="text" onInput={onTodoInput} />
        <button onClick={onAddClick}>Add</button>
        <h1>Total todos: {totalTodos}</h1>
        {todos.map((todo) => {
          return (
          <Todo
          todo={todo}
          onTodoToggleClick={onTodoToggleClick}
          onDeleteClick={onDeleteClick}/>
          );
        })}
        <button onClick={onDeleteAll}>Delete All</button>
      </>
    );
  }
}

export default Interface;
