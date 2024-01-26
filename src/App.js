import React, { Component } from "react";

class App extends Component {
  state = { todos: ["Clean car", "Buy Bread", "Feed fish"] };

  onTodoInput = (e) => {
    this.setState({ todoInput: e.target.value });
  };

  onAddClick = () => {
    const todos = [...this.state.todos];
    todos.push(this.state.todoInput);
    this.setState({ todos });
  };

  onDeleteClick = (todo) => {
    console.log(todo);
    const todos = [...this.state.todos]
    const indexOf = todos.indexOf(todo);
    todos.splice(indexOf, 1)
    this.setState({todos})
  };

  render() {
    console.log(this.state);
    const { todos } = this.state;

    return (
      <>
        <input type="text" onInput={this.onTodoInput} />
        <button onClick={this.onAddClick}>Add</button>
        {todos.map((todo) => {
          return (
            <div>
              <p>{todo}</p>
              <button onClick={() => this.onDeleteClick(todo)}>Del</button>
            </div>
          );
        })}
      </>
    );
  }
}

export default App;
