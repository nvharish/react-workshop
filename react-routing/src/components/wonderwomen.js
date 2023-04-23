import { Outlet } from "react-router-dom";

let WonderWomenComp = ()=>{
    return <div>
                <h2>WonderWomen Component</h2>
                {/**here the nested element will render */}
                <Outlet/>
            </div>
};
export default WonderWomenComp;