import React, { Component } from "react";
import ClassComp from "./components/classcomp";
import PureClassComp from "./components/pureclasscomp";
import FunComp from "./components/funcomp";
import Memofuncomp from "./components/memofuncomp";

class App extends Component{
    state = {
        power : 1,
        version : 0
    }

    increasePower = () => {
        this.setState({ power : this.state.power + 1 })
    }
    setVersion = () => {
        this.setState({ version : 101 })
    }
   
    render(){
        return <div style={ {border : "2px solid red", padding : "10px"} }>
                   <h2>App Component </h2>
                   <h3>Power is { this.state.power }</h3>
                   <button onClick={ this.increasePower }>Increase Power</button>
                   <button onClick={ this.setVersion }>Set Version to 101</button>
                   <hr />
                   <ClassComp version={ this.state.version } power={ this.state.power }/>
                   <PureClassComp version={ this.state.version } power={ this.state.power }/>                
                   <FunComp version={ this.state.version } power={ this.state.power }/>
                   <Memofuncomp version={ this.state.version } power={ this.state.power }/>
               </div>
    }
}

export default App;

/*
Class Component 
Class PureComponent

Function Component 
Function Memo Component 
-----------------------

HOC 
Presentation Component 
Data Component 
*/