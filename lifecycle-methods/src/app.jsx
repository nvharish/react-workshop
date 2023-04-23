import React, { Component } from "react";
import HeroComp from "./hero";

class App extends Component{
    state = {
        power : 1
    }
    increasePower = () => {
        this.setState({ power : this.state.power + 1 })
    }   
    render(){
        return <div style={ {border : "2px solid red", padding : "10px"} }>
                   <h2>App Component </h2>
                   <h3>Power is { this.state.power }</h3>
                   <button onClick={ this.increasePower }>Increase Power</button>
                   <hr />
                  { this.state.power < 10 ?  <HeroComp power={ this.state.power }/> : <h3> Hero is fighting </h3> }
               </div>
    }
}

export default App;