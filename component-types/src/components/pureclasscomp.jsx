import { PureComponent } from "react";

class PureClassComp extends PureComponent{
    render(){
        console.log("PureClassComp was rendered", Math.random());
        return <div>
                    <h1>Pure Class Component</h1>
                    <h2>Power : { this.props.power }</h2>
                    <h2>Version : { this.props.version }</h2>
                </div>
    }
}

export default PureClassComp