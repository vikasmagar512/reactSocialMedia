import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Table, Grid} from 'react-bootstrap';

export class CommitsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commitDetails: []
    };
    this.getCommits = this.getCommits.bind(this);
    this.renderTableBody = this.renderTableBody.bind(this);
    this.navigateToCommitDetails = this.navigateToCommitDetails.bind(this);
  }
  
  componentDidMount() {
    this.getCommits();
  }
  
  navigateToCommitDetails (url) {
    localStorage.setItem('commitURL', url);
    this.props.history.push('/commitdetails');
  }
  getCommits(result) {
    const loogedInUserName = localStorage.getItem('userName');
    const selectedRepo = localStorage.getItem('repository');
    const userRepoCommitsApi = `https://api.github.com/repos/${loogedInUserName}/${selectedRepo}/commits`;
    const main = this;
    fetch(userRepoCommitsApi)
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
  renderTableBody () {
    const {commitDetails} = this.state;
    return (
      commitDetails.map((row, index) => {
        const commit = row.commit || [];
        const url = row.url;
        if(commit) {
          const {author, committer, message} = commit
          return (
            <tr key={`commit_row_${index + 1}`}>
              <td>{author.name || '-'}</td>
              <td>{committer.name || '-'}</td>
              <td>{committer.email || '-'}</td>
              <td>{message || '-'}</td>
              <td><span onClick={() => this.navigateToCommitDetails(url)}>Go</span></td>
            </tr>
          );
        }
        return null;
      })
    )
  }
  render() {
    const selectedRepo = localStorage.getItem('repository')
    // let { userDetails } = this.state;
    // const userName = userDetails && userDetails.user && userDetails.user.displayName ? userDetails.user.displayName : '';
    return (
      <Grid>
        <Link className="router-link" to='repositorydetails'>back</Link>
        <h4>List Of Recent Commits for {selectedRepo} Repository</h4>
        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>Author Name</th>
            <th>Committer Name</th>
            <th>Committer Email</th>
            <th>Commit Message</th>
            <th>Commit Details</th>
          </tr>
          </thead>
          <tbody>
          {this.renderTableBody()}
          </tbody>
        </Table>
      </Grid>
    );
  }
}

export default withRouter(CommitsComponent);
