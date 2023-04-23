import { useParams } from "react-router-dom";

let SupermanComp = ()=>{
    let params=useParams();//access to all route params
    return <div>
                <h2>Superman Component</h2>
                {/**access to route required params */}
                <h3>Power sent from app is : { params.arg1 }</h3>
            </div>
};
export default SupermanComp;