import React, { Component } from "react";

class App extends Component{
    state = {
        power : 1
    }
    ipref = React.createRef();
    /* 
    constructor(){
        super();
        this.increasePower = this.increasePower.bind(this);
    } 
    */
    /*     
    increasePower = ()=>{
       this.setState({ power : this.state.power + 1 }); 
         // alert("hello there")
    } 
    */

    increasePower = ()=>{
        this.setState({ power : this.state.power + 1 }); 
    }

    increasePowerFromRange = (evt)=>{
        this.setState({ power : Number(evt.target.value) }); 
     }
    increasePowerFromNumber = ()=>{
        this.setState({ power : Number(this.ipref.current.value) }); 
     }
    
    render(){
        return <div>
                    <h1>{ this.state.power }</h1>
                    {/* <button onClick={  this.increasePower }>Increase Power</button> */}
                    {/*  <button onClick={  this.increasePower.bind(this) }>Increase Power with inline bind</button> */}
                    {/* <button onClick={  ()=> this.increasePower() }>Increase Power</button> */}
                    {/* <button onClick={ this.increasePower }>Increase Power</button> */}
                    <button onClick={ this.increasePower }>Increase Power</button>
                    <input value={this.state.power} min="1" max="100" onInput={ (evt) => this.increasePowerFromRange(evt) } type="range" />
                    <br />
                    <br />
                    <input ref={ this.ipref } type="number" />
                    <button onClick={ this.increasePowerFromNumber }>Increase Power by </button>
               </div>
    }
}

export default App;