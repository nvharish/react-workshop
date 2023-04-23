import React, { Component } from "react";

class ChildComp extends Component{
    ipref = React.createRef()
    render(){
        return <div style={ {border : "2px solid blue", padding : "10px"} }>
                   <h2>Child Component</h2>
                   <h3>Power is { this.props.power }</h3>
                   <input ref={ this.ipref } type="text" />
                   <button onClick={ ()=> this.props.cm(this.ipref.current.value) } >Send Message to Parent</button>
               </div>
    }
}

export default ChildComp;