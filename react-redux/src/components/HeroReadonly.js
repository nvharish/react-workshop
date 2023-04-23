import { Component } from "react";
import {connect} from 'react-redux';

//bind the prop of this component to state of redux
const mapStateToProps=(state)=>{
    return {
        numberOfHeroes:state.numberOfHeroes
    };
}

class HeroReadonly extends Component{
    render(){
        return <div>
            <h2>Redux Readonly Component</h2>
            <fieldset>
                <legend>Hero's Information</legend>
                <h3>Number of Heroes: {this.props.numberOfHeroes}</h3>
            </fieldset>
        </div>
    }
}

export default connect(mapStateToProps)(HeroReadonly);