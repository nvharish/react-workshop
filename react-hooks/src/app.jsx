import { useState } from "react";
import ChildComp from "./child";

const App = () => {
    let [power, setPower] = useState(0);
    let [version, setVersion] = useState(0);
    return <div style={ {border : "2px solid red", padding : "10px"} }>
                <h2>App Component Power is { power } | Version : { version }</h2>
                <button onClick={ ()=> setPower( power + 1)}>Increase Power</button>
                <button onClick={ ()=> setVersion( version + 1 )}>Increase Version</button>
                <hr />
                { power <= 5 ? <ChildComp version={ version } power={ power }/> : <h3> Child Component was removed</h3>}
           </div>
}

export default App;