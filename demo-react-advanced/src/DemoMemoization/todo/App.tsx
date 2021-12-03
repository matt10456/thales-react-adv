import React, { useState, useEffect } from 'react'

// Components
import List, { Todo } from './List'

const initialTodos: Todo[] = [
  { id: 1, task: 'Apprendre le russe'},
  { id: 2, task: 'Réparer mon vélo'}
]

function App() {

  const [todoList, setTodoList] = useState(initialTodos)
  const [task, setTask] = useState('')

  useEffect(() => {
    console.log('Rendering <App />')
  })

  const handleCreate = () => {
    const newTodo: Todo = {
      id: Date.now(),
      task
    }

    // ajout du todo dans le state
    setTodoList([...todoList, newTodo])

    // reset du champ de saisie
    setTask('')
  }

  return (
    <>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
      />

      <button onClick={handleCreate}>Ajouter</button>

      <List todoList={todoList} />
    </>
  )
}

export default App