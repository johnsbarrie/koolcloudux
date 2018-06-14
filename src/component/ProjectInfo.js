import React from "react";
import { connect } from "react-redux"
import { Component } from "react";

const state = state => {
  return {
    users: state.users
  }
};

class ProjectInfo extends Component {

  render () {
    return (
      <div>dood</div>
    )
  }
}

export default connect(state, null)(ProjectInfo);