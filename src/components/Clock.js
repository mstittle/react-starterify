/**
 * Created by mike on 11/3/2015.
 */

import React from 'react';

export default React.createClass({
  getInitialState() {
    return {time: new Date()};
  },
  tick() {
    this.setState({time: new Date()});
  },
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount() {
    clearInterval(this.interval);
  },
  render() {
    return <div style={clockStyle}>Current Time: {this.state.time.toLocaleTimeString()}</div>;
  }
});

var	clockStyle = {
  color: "red",
  border:"1px solid grey",
  width: "100px"
};

