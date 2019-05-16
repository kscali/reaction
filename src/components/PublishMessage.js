import React, { Component } from "react";
import PubSub from "../pubsub";
import { newMessage } from "../actions/messages";

const pubsub = new PubSub();

class PublishMessage extends Component {
  state = { text: "" };

  updateText = e => this.setState({ text: e.target.value });

  publishMessage = () => {
    pubsub.publish(newMessage(this.state.text));
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.publishMessage();
    }
  };

  render() {
    return (
      <div>
        <h3>Got something to say?</h3>
        <input
          onChange={this.updateText}
          onKeyPress={this.handleKeyPress}
        />{" "}
        <button onClick={this.publishMessage}>Publish it!</button>
      </div>
    );
  }
}

export default PublishMessage;
