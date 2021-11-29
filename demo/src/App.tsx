import React from 'react';
import './App.css';
import Counter from './Counter';
import Issues from './IssuesFc';
import TodoApp from './todoMemo/App';

function Toto() {
  return (<p>Je suis Toto</p>)
}

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
