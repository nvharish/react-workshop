import { Component } from "react";
import ChildComp from "./childcomp";

class ParentComp extends Component{
    render(){
        return <div style={ {border : "2px solid red", padding : "10px", margin : "10px"} }>
                <h2>Parent Component Component</h2>
                <ChildComp/>
           </div>
    }
}

export default ParentComp;