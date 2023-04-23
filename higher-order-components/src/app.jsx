import React, { Component } from "react";
import AvengersComp from "./avengers";
import JusticeLeague from "./justiceleague";

class App extends Component{
    state = {
        power : 1,
        avengers : ['Ironman', 'Hulk', 'Thor'],
        justiceleague : ['Batman', 'Superman', 'Wonder Women']
    }
    increasePower = () => {
        this.setState({ power : this.state.power + 1 })
    }
   
    render(){
        return <div style={ {border : "2px solid red", padding : "10px"} }>
                   <h2>App Component </h2>
                   <h3>Power is { this.state.power }</h3>
                   <button onClick={ this.increasePower }>Increase Power</button>
                   <hr />
                   <AvengersComp title="Avengers" heroeslist={ this.state.avengers }/>
                   <br />
                   <JusticeLeague title="Justice League" heroeslist={ this.state.justiceleague }/>
               </div>
    }
}

export default App;