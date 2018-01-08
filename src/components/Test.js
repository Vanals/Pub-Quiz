import React, { Component } from 'react';

// const host = location.host;
// console.log(host);


class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
    this.ws = new WebSocket(`ws://localhost:3000`);
    this.sendMessage = this.sendMessage.bind(this)
    this.activateLasers = this.activateLasers.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  sendMessage() {
    this.ws.send(this.state.number + 1);
  }

  activateLasers() {
    this.setState({ number: this.state.number + 1 });
  }

  handleData(data) {
    console.log(data);
  }

  render() {
    return (
      <div>
        <button onClick={ this.sendMessage }>
          Activate Lasers
        </button>
        <h1>HELLO {this.state.number}</h1>
      </div>
    )
  }
}

export default Test;
