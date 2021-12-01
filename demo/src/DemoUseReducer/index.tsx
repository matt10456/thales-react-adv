import { useReducer } from "react"

type Todo = {
  id: number
  title: string
  complete: boolean
}

const initialTodos: Todo[] = [
  { id: 1, title: 'Apprendre le russe', complete: false},
  { id: 2, title: 'Réparer mon vélo', complete: false}
]

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo: Todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete }
        } else {
          return todo
        }
      })
    case "DELETE":
      return state.filter((todo: Todo) => todo.id !== action.id)
    default:
      return state
  }
}

function DemoUseReducer() {

  const [todos, dispatch] = useReducer(reducer, initialTodos)

  const handleComplete = (todo: Todo) => {
    dispatch({ type: 'COMPLETE', id: todo.id })
  }

  return (
    <>
      {todos.map((todo: Todo) => (
        <div key={todo.id}>
          <label>
            <input 
              type="checkbox" 
              checked={todo.complete} 
              onChange={() => handleComplete(todo)} 
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  )

}

export default DemoUseReducer