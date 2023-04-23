import React, { Component } from "react";
import WithHeroProps from "./heroes_hoc";

class AvengersComp extends Component{
    render(){
        return <div style={ {border : "2px solid red", padding : "10px"} }>
                <h2>{ this.props.title } | Power is { this.props.totalpower }</h2>
                   <button onClick={ this.props.increasePower }>Increase Power</button>
                   <ol>{ this.props.heroeslist.map( (hero, idx)=> <li key={ idx }>{ hero }</li>)}</ol>
               </div>
    }
}

export default WithHeroProps( AvengersComp );