import React, { Component } from "react";
import { PubSubContext } from "../pubsub";
import { newMessage } from "../actions/messages";
import { connect } from "react-redux";

class PublishMessage extends Component {
  state = { text: "" };

  updateText = e => this.setState({ text: e.target.value });

  publishMessage = () => {
    const { text } = this.state;
    const { username } = this.props;
    this.context.pubsub.publish(newMessage({ text, username }));
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.publishMessage();
    }
  };

  render() {
    console.log("this", this);
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
  static contextType = PubSubContext;
}

export default connect(({ username }) => ({ username }))(PublishMessage);
