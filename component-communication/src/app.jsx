import React, { Component } from "react";
import ChildComp from "./child";

class App extends Component{
    state = {
        power : 1,
        message : "default App message"
    }
    increasePower = () => {
        this.setState({ power : this.state.power + 1 })
    }
    changeMessage = (nmessage) => {
        this.setState({ message : nmessage })
    }
    render(){
        return <div style={ {border : "2px solid red", padding : "10px"} }>
                   <h2>App Component </h2>
                   <h3>Power is { this.state.power }</h3>
                   <h3>Message is { this.state.message }</h3>
                   <button onClick={ this.increasePower }>increase power</button>
                   <hr />
                   <ChildComp cm={ this.changeMessage } power={ this.state.power }/>
               </div>
    }
}

export default App;