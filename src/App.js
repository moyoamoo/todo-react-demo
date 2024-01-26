import React, { Component } from "react";
import Interface from "./Components/Interface";

class App extends Component {
  state = {
    todos: [
      { title: "Clean Car", done: false },
      { title: "Buy Bread", done: true },
      { title: "Feed Fish", done: false },
    ],
  };

  onTodoInput = (e) => {
    this.setState({ todoInput: e.target.value });
  };

  onAddClick = () => {
    const isDuplicate = this.state.todos.some((todo )=>{
      return todo.title == this.state.todoInput
    })

    if (isDuplicate){
      return;
    }
    const todos = [...this.state.todos];
    todos.push({ title: this.state.todoInput, todo: false });
    this.setState({ todos });
  };

  onDeleteClick = (title) => {
    const todos = [...this.state.todos];
    const indexOf = todos.findIndex((todo) => todo.title === title);
    todos.splice(indexOf, 1);
    this.setState({ todos });
  };

  onTodoToggleClick = (title) => {
    const todos = [...this.state.todos];
    const indexOf = todos.findIndex((todo) => todo.title === title);
    todos[indexOf].done = !todos[indexOf].done;
    this.setState({ todos });
  };

  onDeleteAll = () => {
    this.setState({ todos: [] });
  };

  render() {
    console.log(this.state);
    const { todos } = this.state;

    let totalTodos = 0;
    todos.forEach((todo) => {
      if (!todo.done) {
        totalTodos++;
      }
    });

    return (
      <Interface
        totalTodos = {totalTodos}
        onTodoInput={this.onTodoInput}
        onAddClick={this.onAddClick}
        todos = {this.state.todos}
        onTodoToggleClick = {this.onTodoToggleClick}
        onDeleteClick = {this.onDeleteClick}
        onDeleteAll = {this.onDeleteAll}
      />
    );
  }
}

export default App;
