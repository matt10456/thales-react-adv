// Providers
import IssueProvider from '../contexts/Issues'

// Components
import Issues from './Issues'
import Other from './Other'

const DemoContext = () => {
  return (
    <IssueProvider url="https://api.github.com/repos/ContentPI/ContentPI/issues">
      <>
        <Other />
        <Issues />
      </>
    </IssueProvider>
  )
}

export default DemoContext