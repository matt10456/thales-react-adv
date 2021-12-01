import React, { Component } from 'react'
import axios from 'axios'

// Types
type Issue = {
  number: number
  title: string
  url: string
  state: string
}
type Props = {}
type State = { issues: Issue[] }

class Issues extends Component<Props, State> {
  constructor(props: any) {
    console.log('*** constructor ***')
    super(props)

    this.state = {
      issues: []
    }
  }

  componentDidMount() {
    console.log('*** componentDidMount ***')
    axios
      .get('https://api.github.com/repos/ContentPI/ContentPI/issues')
      .then((res: any) => {
        this.setState({ issues: res.data })
      })
  }

  componentDidUpdate() {
    console.log('*** componentDidUpdate ***')
  }

  render() {
    console.log('*** render ***')

    const { issues = [] } = this.state

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
}

export default Issues