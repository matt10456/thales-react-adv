import React, {useState} from 'react'

import Counter from './DemoUseStateAndUseRef/Counter'
import Issues from './DemoUseStateAndUseRef/IssuesFc'
import TodoApp from './DemoMemoization/todoMemo/App'
import DemoHOC from './DemoHOC'
import DemoCustomHook from './DemoCustomHook'
import DemoContext from './DemoContext/components/App'
import DemoUseRef from './DemoUseRef'
import DemoUseReducer from './DemoUseReducer'
import DemoSuspenseSwr from './DemoSuspenseSwr/components/App'
import DemoLazyLoading from './DemoLazyLoading'
import ShowInfo from './DemoTesting/ShowInfo'
import DemoAnimation from './DemoAnimation/end/App'
import DemoI18n from './DemoI18n'

const Toto = () => <p>Je suis le composant fonctionel Toto</p>

const components = [
  {label: 'Counter (useState)', component: <Counter />},
  {label: 'Issues', component: <Issues />},
  {label: 'TodoApp', component: <TodoApp />},
  {label: 'High Order Component', component: <DemoHOC />},
  {label: 'Hook personnalisé', component: <DemoCustomHook />},
  {label: 'Context et useContext', component: <DemoContext />},
  {label: 'useRef', component: <DemoUseRef />},
  {label: 'useReducer', component: <DemoUseReducer />},
  {label: 'Suspense et SWR', component: <DemoSuspenseSwr />},
  {label: 'Lazy Loading', component: <DemoLazyLoading />},
  {label: 'ShowInfo (composant testé)', component: <ShowInfo />},
  {label: 'Animation', component: <DemoAnimation />},
  {label: 'Internationalisation', component: <DemoI18n />}
]

function App() {

  const [selectedComponent, setSelectedComponent] = useState<number | null>(null)


  const handleChange = (e: any) => {
    let componentIndex = e.target.value === "void" ? null : Number(e.target.value)
    setSelectedComponent(componentIndex)
  }

  let label = ''
  let component = <div />
  
  if (selectedComponent !== null) {
    label = components[selectedComponent].label
    component = components[selectedComponent].component
  }
  
  return (
    <div style={{textAlign: 'center'}}>
      <h1>React concepts avancés</h1>
      <select onChange={handleChange}>
        <option value="void">Choix du composant à charger</option>
        {components.map((c, index) => (
          <option key={index} value={index}>{c.label}</option>
        ))}
      </select>
      <div style={{marginTop: 20}}>
        <h2 style={{color: '#45aef5'}}>{ label }</h2>
        <div>{ component }</div>
      </div>
    </div>
  )
}

export default App