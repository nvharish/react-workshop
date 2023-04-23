import { useContext } from "react";
import { FamilyContext } from "../contexts/familycontext";

const CousinComp = ()=> {
    let val = useContext(FamilyContext)
    return <div style={ {border : "2px solid red", padding : "10px", margin : "10px"} }>
            <h2>Cousin Component Component</h2>
             <h3>{ val }</h3>
        </div>
}

export default CousinComp;