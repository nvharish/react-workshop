import { Component } from "react";
import { addHero } from "../redux";
import { connect } from 'react-redux';

//bind the prop of this component to state of redux
const mapStateToProps = (state) => {
    return {
        numberOfHeroes: state.numberOfHeroes
    };
}
//bind the prop of this component to dispatch of redux
const mapDispatchToProps = (dispatch) => {
    return {
        addHero: () => dispatch(addHero())
    };
}

class HeroClassList extends Component {
    render() {
        return <div>
            <h2>Redux with Class Component</h2>
            <fieldset>
                <legend>Hero's Information</legend>
                <h3>Number of Heroes: {this.props.numberOfHeroes}</h3>
                <button onClick={() => this.props.addHero()}>Add Hero</button>
            </fieldset>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroClassList);