import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Table, Grid} from 'react-bootstrap';

export class CommitsDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commitDetails: null
    };
    this.getCommitDetails = this.getCommitDetails.bind(this);
  }
  
  componentDidMount() {
    this.getCommitDetails();
  }
  getCommitDetails(result) {
    const xhrCommitDetailsApi= localStorage.getItem('commitURL');
    debugger;
    const main = this;
    fetch(xhrCommitDetailsApi)
      .then(response => {
          if (!response.ok) {
          throw Error('Network request failed')
        }
        return response
      })
      .then(d => d.json())
      .then( function(data) {
        main.setState({commitDetails: data});
      })
      .catch( function() {
        main.setState({error: 'error'});
    });
  }
  
  renderTableBody (data=[]) {
    const {userRepoDetails} = this.state;
    const main = this;
    return (
      data.map((row, index) => {
        return (
          <tr key={`row_${index+1}`}>
            <td>{row.filename || ''}</td>
            <td>{row.status || ''}</td>
            <td>{row.additions || ''}</td>
            <td>{row.deletions || ''}</td>
            <td>{row.changes || ''}</td>
          </tr>
        )
      })
    )
  }
  
  render() {
    let { commitDetails } = this.state;
    if(commitDetails && commitDetails.files) {
      const {files, html_url} = commitDetails
      return (
        <Grid>
          <Link className="router-link" to='commits'>back</Link>
          <h4>Commit Details</h4>
          <Table striped bordered condensed hover>
            <thead>
            <tr>
              <th>File Name</th>
              <th>Status</th>
              <th>Additions</th>
              <th>Deletions</th>
              <th>Changes</th>
            </tr>
            </thead>
            <tbody>
            {this.renderTableBody(files)}
            </tbody>
          </Table>
          <label>For More details click <a target="_blank" href={commitDetails.html_url}>here</a></label>
        </Grid>
      );
    }
    return null;
  }
}

export default withRouter(CommitsDetailsComponent);
