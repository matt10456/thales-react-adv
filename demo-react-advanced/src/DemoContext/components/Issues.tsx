import { useContext } from "react"

// Contexts
import { IssueContext } from '../contexts/Issues'

type Issue = {
  title: string
  number: number
}

const Issues = () => {
  
  const {issues, setIssues, url} = useContext(IssueContext)

  const handleClick = () => {
    if (setIssues) {

      const newIssues = issues.filter((issue: Issue) => issue.number < 70)
      setIssues(newIssues)
    }
  }
  
  return(
    <>
      <button onClick={handleClick}>Touche à mon state</button>
      {issues.map((issue: Issue) => 
        <p key={issue.number}>
          <strong>#{issue.number} </strong>
          <a href={`${url}/${issue.number}`} target="_blank">{issue.title}</a>
        </p>)}
    </>
  )
}

export default Issues