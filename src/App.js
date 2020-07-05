import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "evergreen-ui";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>
          I am using{" "}
          <span role="img" aria-label="tree">
            🌲
          </span>{" "}
          Evergreen!
        </Button>
      </header>
    </div>
  );
}

export default App;
