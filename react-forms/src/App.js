import { Component, useState, useReducer } from 'react';

// class App extends Component {
//   state = {
//     uname: "",
//     uage: 0
//   };

//   //using individual functions for each field
//   /* 
//     updateUserName = (evt)=>{
//         this.setState({ uname : evt.target.value })
//     }
//     updateUserAge = (evt)=>{
//         this.setState({ uage : Number(evt.target.value) })
//     } 
//     */

//   //using one common function for all fields  

//   updateState = (evt) => {
//     this.setState({
//       [evt.target.id]: evt.target.value
//     });
//   }

//   render() {
//     return <div className='container'>
//       <h1>React Forms</h1>
//       <div className='mb-3'>
//         <label htmlFor='uname'>User name</label>
//         <input type='text' className='form-control' id='uname' value={this.state.uname} onChange={(evt) => this.updateState(evt)} />
//       </div>

//       <div className='mb-3'>
//         <label htmlFor='uage'>User age</label>
//         <input type='number' className='form-control' id='uage' value={this.state.uage} onChange={(evt) => this.updateState(evt)} />
//       </div>

//       <div className='mb-3'>
//         <button type='submit' className='btn btn-primary'>Submit</button>
//       </div>

//       <ul>
//         <li>User name: {this.state.uname}</li>
//         <li>User age: {this.state.uage}</li>
//       </ul>
//     </div>
//   }
// }

//using function compononet
// function App() {
//   const [state, setState] = useState({
//     uname: "",
//     uage: 0
//   });

//   const updateState = (evt) => {
//     setState({ ...state, [evt.target.id]: evt.target.value });
//   }

//   return <div className='container'>
//     <h1>React Forms</h1>
//     <div className='mb-3'>
//       <label htmlFor='uname'>User name</label>
//       <input type='text' className='form-control' id='uname' value={state.uname} onChange={(evt) => updateState(evt)} />
//     </div>

//     <div className='mb-3'>
//       <label htmlFor='uage'>User age</label>
//       <input type='number' className='form-control' id='uage' value={state.uage} onChange={(evt) => updateState(evt)} />
//     </div>

//     <div className='mb-3'>
//       <button type='submit' className='btn btn-primary'>Submit</button>
//     </div>

//     <ul>
//       <li>User name: {state.uname}</li>
//       <li>User age: {state.uage}</li>
//     </ul>
//   </div>
// }

//using use reducer hook
function App() {

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_UNAME":
        return {
          ...state, uname: action.payload
        }
      case "UPDATE_UAGE":
        return {
          ...state, uage: action.payload
        }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    uname: "",
    uage: 0
  });

  return <div className='container'>
    <h1>React Forms</h1>
    <div className='mb-3'>
      <label htmlFor='uname'>User name</label>
      <input type='text' className='form-control' id='uname' value={state.uname} onChange={(evt)=>dispatch({type: "UPDATE_UNAME", payload:evt.target.value})} />
    </div>

    <div className='mb-3'>
      <label htmlFor='uage'>User age</label>
      <input type='number' className='form-control' id='uage' value={state.uage} onChange={(evt)=>dispatch({type: "UPDATE_UAGE", payload:evt.target.value})} />
    </div>

    <div className='mb-3'>
      <button type='submit' className='btn btn-primary'>Submit</button>
    </div>

    <ul>
      <li>User name: {state.uname}</li>
      <li>User age: {state.uage}</li>
    </ul>
  </div>
}

// let hero = {
//   title : "Batman",
//   age : 21,
//   movie1 : "Batman begins",
//   movie2 : "The Dark Knight"
// }

// console.log( hero.title );
// var count = 1;
// console.log( hero['movie'+(count+1)] );

export default App;