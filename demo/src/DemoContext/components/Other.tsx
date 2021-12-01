import { useContext } from "react"

// Contexts
import { IssueContext } from '../contexts/Issues'

const Other = () => {
  
  const {issues, url} = useContext(IssueContext)
  
  return(
    <>
      Nombre d'issues affichées: {issues.length}
    </>
  )
}

export default Other