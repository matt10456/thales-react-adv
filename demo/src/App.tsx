import React from 'react'
import './App.css'



// --- TEMP ---
//import DemoUseMemo from './tmp/DemoUseMemo'
//import DemoUseCallback from './tmp/DemoUseCallback'
//import DemoUseReducer  from './tmp/DemoUseReducer'
//import DemoCustomHook  from './tmp/DemoCustomHook'
//import DemoI18n from './tmp/DemoI18n'
//import DemoAnimation from './tmp/DemoAnimation/start/App'
//import DemoContext from './tmp/DemoContext/components/App'
//import DemoSuspenseSwr from './tmp/DemoSuspenseSwr/components/App'
//import DemoLazyLoading from './tmp/DemoLazyLoading'
//import ShowInfo from './tmp/DemoTesting/ShowInfo'
// --- TEMP ---



import Counter from './DemoUseEffectAndUseRef/Counter'
import Issues from './DemoUseEffectAndUseRef/IssuesFc'
import TodoApp from './DemoMemoization/todoMemo/App'
import DemoHOC from './DemoHOC'
import DemoCustomHook from './DemoCustomHook'
import DemoContext from './DemoContext/components/App'
import DemoUseRef from './DemoUseRef'
import DemoUseReducer from './DemoUseReducer'
import DemoSuspenseSwr from './DemoSuspenseSwr/components/App'
import DemoLazyLoading from './DemoLazyLoading'
import ShowInfo from './DemoTesting/ShowInfo'


function Toto() {
  return (<p>Je suis Toto</p>)
}

function App() {
  return (
    <div className="App">
      <ShowInfo />
    </div>
  );
}

export default App
