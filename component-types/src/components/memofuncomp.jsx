import {memo} from "react";

let MemoFunComp = (props)=>{
    console.log("Memo Function Component was rendered", Math.random());
    return <div>
                <h1>Memo Function Component</h1>
                <h2>Power : { props.power }</h2>
                <h2>Version : { props.version }</h2>
            </div>
}

export default memo(MemoFunComp);