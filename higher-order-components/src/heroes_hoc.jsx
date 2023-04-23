import { Component } from "react";

let WithHeroProps = (Comp) => {
    return class TempComp extends Component{
        state = {
            totalpower : 0
        }
        increasePower = ()=> {
            this.setState({ totalpower : this.state.totalpower + 1 })
        }
        render(){
           //  return <Comp increasePower={ this.increasePower } totalpower={ this.state.totalpower } title={ this.props.title } heroeslist={ this.props.heroeslist } />
            return <Comp increasePower={ this.increasePower } totalpower={ this.state.totalpower } { ...this.props } />
        }
    }
}

export default WithHeroProps