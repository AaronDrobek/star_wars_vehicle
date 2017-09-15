import React, {Component} from 'react';

export default class Pilots extends Component{
  constructor(props){
    super(props);
    this.state= {
      pilot: '',
      name: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleNameChange(event){
      console.log("this is event target",event.target.value);
      this.setState({name: event.target.value});

    }
    handleSubmit(event){
      event.preventDefault();
      this.setState({pilot: this.state.name, name: ''})
    }



  render(){
    let pilot = this.state.pilot
    return(
      <div className="pilot_box">
      <h1> What Is Your Name Pilot?</h1>
      <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleNameChange} value={this.state.name} type="text"/>
      <br/>
      <button type="submit">Submit</button>
      </form>
      <h2>{this.state.pilot}</h2>
      </div>
    )
  }
}
