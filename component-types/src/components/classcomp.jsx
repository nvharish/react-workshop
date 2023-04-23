import { Component } from "react";

class ClassComp extends Component{
    render(){
        console.log("ClassComp was rendered", Math.random());
        return <div>
                    <h1>Class Component</h1>
                    <h2>Power : { this.props.power }</h2>
                    <h2>Version : { this.props.version }</h2>
                </div>
    }
}

export default ClassComp