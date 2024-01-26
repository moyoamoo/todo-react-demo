import React, { Component } from "react";

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
    const todos = [...this.state.todos];
    todos.push({ title: this.state.todoInput, todo: false });
    this.setState({ todos });
  };

  onDeleteClick = (title) => {
    const todos = [...this.state.todos];
    const indexOf = todos.findIndex((todo) => (todo.title === title));
    todos.splice(indexOf, 1);
    this.setState({ todos });
  };

  onTodoToggleClick = (title) => {
    const todos = [...this.state.todos];
    const indexOf = todos.findIndex((todo) => (todo.title === title));
    todos[indexOf].done = !todos[indexOf].done;
    this.setState({ todos });
  };

  onDeleteAll = ()=>{
    this.setState({todos: []})
  }

  render() {
    console.log(this.state);
    const { todos } = this.state;

    let totalTodos = 0;
    todos.forEach(todo =>{
      if (!todo.done){
        totalTodos++
      }
    })

    return (
      <>
        <input type="text" onInput={this.onTodoInput} />
        <button onClick={this.onAddClick}>Add</button>
        <h1>Total todos: {totalTodos}</h1>
        {todos.map((todo) => {
          return (
            <div className={todo.done ? "done" : "undone"}>
              <p onClick={() => this.onTodoToggleClick(todo.title)}>{todo.title}</p>
              <button onClick={() => this.onDeleteClick(todo.title)}>
                Del
              </button>
            </div>
          );
        })}
        <button onClick={this.onDeleteAll}>Delete All</button>
      </>
    );
  }
}

export default App;
