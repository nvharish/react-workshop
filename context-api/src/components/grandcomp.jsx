import React, { Component } from "react";
import ParentComp from "./parentcomp";
import { FamilyProvider } from "../contexts/familycontext";
import CousinComp from "./cousincomp";

class GrandComp extends Component{
    state = {
        message : ''
    }
    ipref = React.createRef();
    setMessage = ()=>{
        this.setState({
            message : this.ipref.current.value
        })
    }
    render(){
        return <div style={ {border : "2px solid red", padding : "10px", margin : "10px"} }>
                    <h2>Grand Component Component</h2>
                    <h3>Message is : { this.state.message }</h3>
                    <input ref={ this.ipref } type="text" />
                    <button onClick={ this.setMessage }>Set Message</button>
                    <FamilyProvider value={ this.state.message }>
                        <ParentComp/>
                        <CousinComp/>
                    </FamilyProvider>
                </div>
    }
}

export default GrandComp;