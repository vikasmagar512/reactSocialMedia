import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import moment from 'moment';
import {Table, Grid} from 'react-bootstrap';

export class RepositoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userRepoDetails: [],
      userDetails: {},
      isRepositoryEmpty: true,
      showEmpty: false
    };
    this.getRepositoryList = this.getRepositoryList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
    
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('firebaseAuthResponse'));
    this.getRepositoryList(data);
  }
  
  getRepositoryList(result) {
    const main = this;
    const username = result.additionalUserInfo.username;
    localStorage.setItem('userName', result.additionalUserInfo.username);
    const userRepoApi = `https://api.github.com/users/${username}/repos`;
    fetch(userRepoApi)
      .then(response => {
          if (!response.ok) {
          throw Error('Network request failed')
        }
        return response
      })
      .then(d => d.json())
      .then( function(data) {
        if(data.length === 0){
          main.setState({showEmpty: true})
        } else {
          main.setState({userRepoDetails: data, userDetails: result, isRepositoryEmpty: false});
        }
      })
      .catch( function() {
        main.setState({infoStatus: 'error'});
    });
  }
  handleClick(name) {
    localStorage.setItem('repository', name);
    this.props.history.push('/repositorydetails');
  }
  renderTableBody () {
    const {userRepoDetails} = this.state;
    const main = this;
    return (
      userRepoDetails.map((row, index) => {
        return (
          <tr key={`row_${index+1}`}>
            <td>{row.id}</td>
            <td><span onClick={() => main.handleClick(row.name)}>{row.name}</span></td>
            <td>{moment(row.created_at).format('MM-DD-YYYY')}</td>
            <td>{moment(row.updated_at).format('MM-DD-YYYY')}</td>
            <td>{moment(row.pushed_at).format('MM-DD-YYYY')}</td>
            <td>{row.clone_url}</td>
            <td>{row.default_branch}</td>
          </tr>
        )
      })
    )
  }
  
  render() {
    let { userDetails, isRepositoryEmpty, showEmpty } = this.state;
    const userName = userDetails && userDetails.user && userDetails.user.displayName ? userDetails.user.displayName : '';
    if(!isRepositoryEmpty) {
      return (
        <Grid>
          <Link className="router-link" to='/'>back</Link>
          <h4>List of {userName} Repositories</h4>
          <Table striped bordered condensed hover>
            <thead>
            <tr>
              <th>ID</th>
              <th>Repository Name</th>
              <th>Created Date</th>
              <th>Updated Date</th>
              <th>Pushed Date</th>
              <th>Clone URL</th>
              <th>Default Branch</th>
            </tr>
            </thead>
            <tbody>
            {this.renderTableBody()}
            </tbody>
          </Table>
    
        </Grid>
      );
    } else if(showEmpty && isRepositoryEmpty) {
      return (
        <Grid>
          <h2>No repository is available!!!</h2>
          <Link to='/'>back</Link>
        </Grid>
      );
    }
    return null;
  }
}

export default withRouter(RepositoryComponent);
