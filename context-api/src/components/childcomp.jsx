import { Component } from "react"
import { FamilyConsumer } from "../contexts/familycontext";

class ChildComp extends Component{
   render(){
    return  <div style={ {border : "2px solid red", padding : "10px", margin : "10px"} }>
                    <h2>Child Component Component</h2>
                    <FamilyConsumer>{function(val){
                       return <h3>{ val }</h3>
                    }}</FamilyConsumer>
            </div>
   }
}

export default ChildComp;