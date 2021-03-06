import React, { Component } from "react";
import { REACTION_OBJECTS } from "../actions/types";

class CreateReaction extends Component {
  render() {
    return (
      <div>
        {REACTION_OBJECTS.map(reaction => {
          const { type, emoji } = reaction;

          return (
            <span style={{ margin: 5, cursor: "pointer" }} key={type}>
              {emoji}
            </span>
          );
        })}
      </div>
    );
  }
}
export default CreateReaction;
