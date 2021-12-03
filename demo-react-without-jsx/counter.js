function Button(props){
  return e('button',{onClick:props.handleClick},props.name);
}

class Counter extends React.Component {
  state = { num: 0 }
  handleIncrement = () =>{
    this.setState({
      num: this.state.num + 1
    })
  }
  handleDecrement = () =>{
    this.setState({
      num: this.state.num - 1
    })
  }
  render(){
    return e('div',null,
        e(Button,{handleClick:this.handleIncrement,name:'Increment'},null),
        e(Button,{handleClick:this.handleDecrement,name:'Decrement'},null),
        e('p',null,this.state.num)
    )
  }
}