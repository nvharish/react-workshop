import { useRef, useState } from "react";
import ParentComp from "./parentcomp";
import CousinComp from "./cousincomp";
import { FamilyContext } from "../contexts/familycontext";

const GrandComp = ()=>{
    let [message, setMessage] = useState("") 
    let ipref = useRef();
    return <div style={ {border : "2px solid red", padding : "10px", margin : "10px"} }>
                    <h2>Grand Component Component</h2>
                    <h3>Message is : {  message }</h3>
                    <input ref={ ipref } type="text" />
                    <button onClick={ ()=> setMessage(ipref.current.value) }>Set Message</button>
                    <FamilyContext.Provider value={ message }>
                        <ParentComp/>
                        <CousinComp/>
                    </FamilyContext.Provider>
                </div>
}

export default GrandComp;