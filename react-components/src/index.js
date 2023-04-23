import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// let elm = React.createElement("h1",null,"Welcome to your life");

// FUNCTION Component
let Elm = function () {
    return <>
        <h1>Hello from Function Component</h1>
        <h1>Hello from Function Component</h1>
        <h1>Hello from Function Component</h1>
        <h1>Hello from Function Component</h1>
        <h1>Hello from Function Component</h1>
    </>
}

// CLASS Component

class ClassComp extends Component {
    render() {
        return <>
            <h1>Hello from Class Component</h1>
            <h1>Hello from Class Component</h1>
            <h1>Hello from Class Component</h1>
            <h1>Hello from Class Component</h1>
        </>
    }
}

ReactDOM
    .createRoot(document.getElementsByClassName("root")[0])
    .render(<div> <ClassComp /> <Elm /> </div>)
// ReactDOM.createRoot(document.querySelector(".root")).render(<h1>welcome to your life</h1>)