import { useEffect, useState } from "react";
import axios from "axios";

const ChildComp = (props) => {
    let [users, updateUsers] = useState([]);
   // called when component is mounted
    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=2").then(res => updateUsers(res.data.data) )
    },[]);
    
    return <div style={ {border : "2px solid blue", padding : "10px"} }>
                <h2>ChildComp Component </h2>
                <h2>Power is : { props.power }</h2>
                <h2>Version is : { props.version }</h2>
                <hr />
                <ol>
                    {
                        users.map( (user) => <li key={ user.id }>{ user.first_name }</li>)
                    }
                </ol>
           </div>
}

export default ChildComp;