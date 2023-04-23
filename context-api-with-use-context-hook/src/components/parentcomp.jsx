import ChildComp from "./childcomp";

const ParentComp = ()=> {
    return <div style={ {border : "2px solid red", padding : "10px", margin : "10px"} }>
                <h2>Parent Component Component</h2>
                <ChildComp/>
           </div>
}

export default ParentComp;