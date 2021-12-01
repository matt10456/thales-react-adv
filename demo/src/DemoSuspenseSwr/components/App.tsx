import { SWRConfig } from 'swr'

import PokeContainer from './Pokemon/PokeContainer'
import fetcher from './Pokemon/fetcher'

const App = () => {
  return (
    <>
      <SWRConfig value={{ fetcher, suspense: true }}>
        <h1>Pokemon Lab</h1>
        <PokeContainer />
      </SWRConfig>
    </>
  )
}

export default App