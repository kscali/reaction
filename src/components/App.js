import React from "react";
import PublishMessage from "./PublishMessage";

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Reaction</h2>
        <hr />
        <PublishMessage />
      </div>
    );
  }
}

export default App;
