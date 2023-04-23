import React, { Component } from "react";
import axios from "axios";

class HeroComp extends Component{
    state = {
        users : []
    }
    constructor(){
        super();
        console.log("HeroComp's constructor was called");
    }
    componentDidMount(){
        console.log("HeroComp's componentDidMount was called");
        axios.get("https://reqres.in/api/users?page=1")
        .then(res => this.setState({ users : res.data.data }))
        .catch( err => console.log("Error ", err ))
    }
    componentDidUpdate(){
        console.log("HeroComp's componentDidUpdate was called");
    }
    componentWillUnmount(){
        console.log("HeroComp's componentWillUnmount was called");
    }
    render(){
        console.log("HeroComp's render was called");
        return <div style={ {border : "2px dashed blue", padding : "10px"} }>
                   <h2>Hero Component </h2>
                   <h3>Power is { this.props.power }</h3>
                   <p>{ JSON.stringify(this.state.users) }</p>
                   <ol>{ this.state.users.map( user => <li key={ user.id }>
                    <img src={ user.avatar } width="50" />    | { user.first_name }
                    </li>)}</ol>
               </div>
    }
}

export default HeroComp;