import React, { Component } from "react";

class App extends Component{
    state = {
        power : 1,
        show : false
    }
    increasePower = () => {
        this.setState({ power : this.state.power + 1 });
    }
    render(){
        return <div style={ {border : "2px solid red", padding : "10px"} }>
                   <h2>App Component </h2>
                   <h3>Power is { this.state.power }</h3>
                   <button onClick={ this.increasePower }>Increase Power</button>
                   <hr />
                   <label htmlFor="terms">Show Terms and Conditions</label>
                   <input onChange={()=> this.setState({ show : !this.state.show })} id="terms" type="checkbox" />
                  {/*  { this.state.show ? <div>
                    <h3>Terms and Conditions</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique rerum ullam provident nemo quas deleniti delectus suscipit ea in nostrum eos aliquam, minima consectetur doloribus ut commodi. Soluta, magnam?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ducimus ipsam rem maxime eos, dignissimos, unde reiciendis qui quis consequuntur ab beatae, laborum a deserunt harum enim quo facere. Quam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illum illo placeat, accusamus eveniet nesciunt iure velit unde expedita veniam officiis quasi tempore commodi ducimus aperiam quod doloribus ullam id.
                    </p>
                   </div> : "terms are hidden" } */}
                    { this.state.show &&  <div>
                    <h3>Terms and Conditions</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique rerum ullam provident nemo quas deleniti delectus suscipit ea in nostrum eos aliquam, minima consectetur doloribus ut commodi. Soluta, magnam?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ducimus ipsam rem maxime eos, dignissimos, unde reiciendis qui quis consequuntur ab beatae, laborum a deserunt harum enim quo facere. Quam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illum illo placeat, accusamus eveniet nesciunt iure velit unde expedita veniam officiis quasi tempore commodi ducimus aperiam quod doloribus ullam id.
                    </p>
                   </div> }
               </div>
    }
}

export default App;