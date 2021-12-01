import { FC, useEffect, memo } from 'react'

// Components
import Task from './Task'

// Types
export type Todo = {
  id: number
  task: string
}

interface Props {
  todoList: Todo[],
  handleDelete: any
}

const List: FC<Props> = ({ todoList, handleDelete }) => {

  useEffect(() => {
    //console.log('Rendering <List />')
  })

  return (
    <ul>
      {todoList.map((todo: Todo) => (
        <Task key={todo.id} id={todo.id} task={todo.task} handleDelete={handleDelete} />
      ))}
    </ul>
  )
}

export default memo(List)