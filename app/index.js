import React from "react";
import {displayContainer} from "./Layout.css";
import {render} from "react-dom";

export class App extends React.Component{
  render() {
    return(
      <div className={displayContainer}>
      <p>Hello World</p>
      <p>Welcome from app</p>
      
      </div>
    );
  }
}

render(<App/>,window.document.getElementById('app'));
