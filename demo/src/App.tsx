import React from 'react'
import './App.css'
import Counter from './Counter'
import Issues from './IssuesFc'

//import DemoUseMemo from './tmp/DemoUseMemo'
//import DemoUseCallback from './tmp/DemoUseCallback'
//import DemoUseReducer  from './tmp/DemoUseReducer'
//import DemoCustomHook  from './tmp/DemoCustomHook'
//import DemoI18n from './tmp/DemoI18n'
//import DemoAnimation from './tmp/DemoAnimation/App'
//import DemoContext from './tmp/DemoContext/components/App'
//import DemoSuspenseSwr from './tmp/DemoSuspenseSwr/components/App'
//import DemoLazyLoading from './tmp/DemoLazyLoading'
//import ShowInfo from './tmp/DemoTesting/ShowInfo'




import TodoApp from './todoMemo/App'
import DemoHOC from './DemoHOC'
import DemoCustomHook from './DemoCustomHook'
import DemoContext from './DemoContext/components/App'
import DemoUseRef from './DemoUseRef'
import DemoUseReducer from './DemoUseReducer'
import DemoSuspenseSwr from './DemoSuspenseSwr/components/App'
import DemoLazyLoading from './DemoLazyLoading'

function Toto() {
  return (<p>Je suis Toto</p>)
}

function App() {
  return (
    <div className="App">
      <DemoLazyLoading />
    </div>
  );
}

export default App
