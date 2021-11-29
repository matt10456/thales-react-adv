import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'

// Types
type Issue = {
  number: number
  title: string
  url: string
  state: string
}

const Issues: FC = () => {

  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    console.log('*** useEffect ***')
    axios
      .get('https://api.github.com/repos/ContentPI/ContentPI/issues')
      .then((res: any) => {
        setIssues(res.data)
      })
  }, [])

  return (
    <>
      <h1>ContentPI issues</h1>
        { issues.map((issue: Issue) => (
          <p key={issue.number}>
            <strong>#{issue.number}</strong>{' '}
            <a 
              href={`https://api.github.com/repos/ContentPI/ContentPI/issues/${issue.number}`} 
              target="_blank">{issue.title}</a>{' '}
            {issue.state}
          </p>
        )) }
    </>
  )

}

export default Issues