import { useReducer, useRef, useState } from "react";

function App() {
  /*
  let [hero, setState] = useState({ power: 0, version: 100 });

  //below code is for normal case, where we have to decalare functions for each property  
  const powerIncreaseHandler = () => {
    setState({ ...hero, power: hero.power + 1 })
  }

  const powerDecreaseHandler = () => {
    setState({ ...hero, power: hero.power - 1 })
  }

  const versionIncreaseHandler = () => {
    setState({ ...hero, version: hero.version + 1 })
  }

  const versionDecreaseHandler = () => {
    setState({ ...hero, version: hero.version - 1 })
  }

  return <div>
    <h1>Use State</h1>
    <h2>Power : {hero.power}</h2>
    <button onClick={powerIncreaseHandler}>Increase Power</button>
    <button onClick={powerDecreaseHandler}>Decrease Power</button>
    <hr />
    <h2>Version : {hero.version}</h2>
    <button onClick={versionIncreaseHandler}>Increase Power</button>
    <button onClick={versionDecreaseHandler}>Decrease Power</button>
  </div>
  */

  //using useReducer hook
  let reducerFun = (state, action) => {
    switch (action.type) {
      case "INCREASEPOWER": return { ...state, power: state.power + 1 }
      case "DECREASEPOWER": return { ...state, power: state.power - 1 }
      case "SETVERSION": return { ...state, power: action.payload }
      case "INCREASEVERSION": return { ...state, version: state.version + 1 }
      case "DECREASEVERSION": return { ...state, version: state.version - 1 }
      case "SETTITLE" : return { ...state, title : action.message.title }
      default: return state
    }
  };

  let [store, dispatch] = useReducer(reducerFun, { power: 0, version: 100 });
  let ipref = useRef();

  return <div>
    <h1>Use State</h1>
    <h2>Power : {store.power}</h2>
    <button onClick={() => dispatch({ type: "INCREASEPOWER" })}>Increase Power</button>
    <button onClick={() => dispatch({ type: "DECREASEPOWER" })}>Decrease Power</button>
    <button onClick={() => dispatch({ type: "SETVERSION", payload: 10 })}>Set Power to 10</button>
    <hr />
    <h2>Version : {store.version}</h2>
    <button onClick={() => dispatch({ type: "INCREASEVERSION" })}>Increase Power</button>
    <button onClick={() => dispatch({ type: "DECREASEVERSION" })}>Decrease Power</button>
    <hr />
    <h2>Title : {store.title}</h2>
    <input type="text" ref={ipref} />
    <button onClick={() => dispatch({ type: "SETTITLE", message: { title: ipref.current.value } })}>Set Title</button>
  </div>
}

export default App;