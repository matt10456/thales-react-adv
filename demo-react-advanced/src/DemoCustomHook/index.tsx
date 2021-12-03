import useFetch from "./useFetch";

type Todo = {
  id: number
  title: string
}

function DemoCustomHook() {
  const data = useFetch('https://jsonplaceholder.typicode.com/todos')
  
  return (
    <div>
      {data.map((todo: Todo) => <p key={todo.id}>{todo.title}</p> )}
    </div>
  );
}

export default DemoCustomHook;