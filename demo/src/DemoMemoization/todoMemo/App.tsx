import React, { useState, useEffect, useMemo, useCallback } from 'react'

// Components
import List, { Todo } from './List'

const initialTodos: Todo[] = [
  { id: 1, task: 'Apprendre le russe'},
  { id: 2, task: 'Réparer mon vélo'}
]

function App() {

  const [todoList, setTodoList] = useState(initialTodos)
  const [task, setTask] = useState('')
  const [term, setTerm] = useState('')

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

  const handleSearch = () => {
    setTerm(task)
  }

  // const handleDelete = (todoId: number) => {
  //   //console.log('delete', todoId)
  //   const newTodoList = todoList.filter((todo: Todo) => todo.id !== todoId)
  //   setTodoList(newTodoList)
  // }

  const handleDelete = useCallback((todoId: number) => {
    const newTodoList = todoList.filter((todo: Todo) => todo.id !== todoId)
    setTodoList(newTodoList)
  }, [todoList])

  // Memoization du filtrage  => gain en perfs. "useMemo returns a memoized value"
  const filterTodoList = useMemo(() => todoList.filter((todo: Todo) => {
    return todo.task.toLowerCase().includes(term.toLocaleLowerCase())
  }), [term, todoList])

  return (
    <>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
      />

      <button onClick={handleCreate}>Ajouter</button>
      <button onClick={handleSearch}>Rechercher</button>

      <List todoList={filterTodoList} handleDelete={handleDelete} />
    </>
  )
}

export default App