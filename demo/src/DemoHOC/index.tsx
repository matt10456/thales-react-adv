import React from 'react';

function simpleHOC(DecoratedComponent: any) {
  return class extends React.Component {
    constructor(props: any) {
      super(props)
      console.log('*** anonymous wrapper component constructor ***')
    }
    render() {
      return <DecoratedComponent exemple="exemple" />
    }
  }
}

function Hello(props: any) {
  return (<div>Hello {props.exemple}</div>)
}

const NewComponent = simpleHOC(Hello)

export default simpleHOC(Hello);