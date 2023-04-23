import React, { Component } from "react";
import ReactDOM from "react-dom/client";

let user = "Vijay";

ReactDOM
    .createRoot(document.getElementsByClassName("root")[0])
    .render(<div>
        <h1>JSX By {user}</h1>
        <hr />
        <h2>{false ? "it was true " : " it was false"}</h2>
        <button style={{ backgroundColor: "crimson", color: "papayawhip" }} className="box">Click Me</button>
        <br />
        <br />
        <label htmlFor="nameinput">Enter Your Name</label>
        <input id="nameinput" />
    </div>)