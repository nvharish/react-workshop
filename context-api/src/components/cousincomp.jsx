import { Component } from "react";
import { FamilyConsumer } from "../contexts/familycontext";

class CousinComp extends Component{
    render(){
        return <div style={ {border : "2px solid red", padding : "10px", margin : "10px"} }>
                <h2>Cousin Component Component</h2>
                <FamilyConsumer>{(val) => {
                    return <h3>{ val }</h3>
                }}</FamilyConsumer>
           </div>
    }
}

export default CousinComp;