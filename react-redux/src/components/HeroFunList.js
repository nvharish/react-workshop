import { useDispatch, useSelector } from "react-redux"
import { addHero } from "../redux";

const HeroFunList = () => {
    const numberOfHeroes=useSelector(state=>state.numberOfHeroes);
    const dispatch=useDispatch();
    return <div>
        <h2>Redux with Hook Component</h2>
        <fieldset>
            <legend>Hero's Information</legend>
            <h3>Number of Heroes: {numberOfHeroes}</h3>
            <button onClick={() => dispatch(addHero())}>Add Hero</button>
        </fieldset>
    </div>
}

export default HeroFunList;