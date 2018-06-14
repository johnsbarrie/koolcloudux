import React from "react";
import { connect } from "react-redux"
import { Component } from "react";
import { Table } from 'semantic-ui-react'
import ProjectConstants from "../constant/ProjectConstants"

const state = state => {
  return {
    projects : state.projects
  }
};

const actions = dispatch => {
  return {
    actions: {
      viewProject : (id) => {
        dispatch({
          type: ProjectConstants.VIEW,
          payload: id
        })
      }
    }
  }
};

class ProjectsTable extends Component {
  rows() {
    const projectRows = (this.props.projects) ? this.props.projects.map((project, index) => {
      return  (
        <Table.Row key={index}>
          <Table.Cell>{project.name}</Table.Cell>
          <Table.Cell>{project.ownerid}</Table.Cell>
          <Table.Cell>Private</Table.Cell>
          <Table.Cell>Admin</Table.Cell>
          <Table.Cell><button onClick={ () => { this.props.actions.viewProject(project.id); } }>View</button> | <button>Modify</button></Table.Cell>
          <Table.Cell>Pending Request</Table.Cell>
        </Table.Row>
      )
    }) : null;

    return (projectRows)
  }

  render() {

    const projectRows = this.rows();
    return (
      <Table >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Project</Table.HeaderCell>
            <Table.HeaderCell>Owner</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Permissions</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
            <Table.HeaderCell>Notifications</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {projectRows}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
  }
}

export default connect(state, actions)(ProjectsTable);

