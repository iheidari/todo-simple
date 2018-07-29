import React, { Component } from 'react';
import './App.css';
import TodoApp from './components/TodoApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple Todo</h1>
        </header>
        <div className="App-content">
           <TodoApp />
        </div>
      </div>
    );
  }
}

export default App;
