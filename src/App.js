import React, { Component } from 'react';

class App extends Component {
  constructor (){
    super();
    this.state = {
        count: 0,
        numberInterval: 1000
    }
    this.increment = this.increment.bind(this); //binding mean inside of "increment" the 
                            // "this" keyword is the component
    this.decrement = this.decrement.bind(this);

    this.reset = this.reset.bind(this);

  }
  
increment(){
  this.setState({count: this.state.count + 1});
}
decrement(){
  this.setState({count: this.state.count - 1});
}
reset(){
  this.setState({count: this.state.reset = 0});
}
interval = (e) => {
  const change = e.target.options[e.target.selectedIndex].value;
  this.setState({numberInterval: onChange})
}
render(){
  return (
    <div>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
      <h1>{this.state.count}</h1>
      <button onClick={this.reset}>Reset</button>
      <button onChange={this.interval}>
        interval
        <input type="text"/>
      </button>
    </div>
  );
}
}

export default App;
