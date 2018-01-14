import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import moment from 'moment';

export class RepositoryDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositoryDetails: null
    };
    this.getCommits = this.getCommits.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    this.getCommits();
  }
  getCommits() {
    const loogedInUserName = localStorage.getItem('userName');
    const selectedRepo = localStorage.getItem('repository');
    const xhrRepositoryDetails = `https://api.github.com/repos/${loogedInUserName}/${selectedRepo}`;
    const main = this;
    fetch(xhrRepositoryDetails)
      .then(response => {
          if (!response.ok) {
          throw Error('Network request failed')
        }
        return response
      })
      .then(d => d.json())
      .then(function(data) {
        main.setState({repositoryDetails: data});
      })
      .catch(function(err) {
        main.setState({error: err});
    });
  }
  handleClick() {
    this.props.history.push('/commits');
  }
  render(){
    if(this.state.repositoryDetails){
      const {name, id, created_at, full_name, updated_at, pushed_at, clone_url, watchers_count, default_branch,
        license} = this.state.repositoryDetails;
      return (
        <Grid>
          <Link className='router-link' to='repository'>back</Link>
          <h4>{name} Repository Details</h4>
          <Col>
            <Row>
              <Col md={2}><strong>Repository Name</strong></Col>
              <Col md={2}>{name}</Col>
            </Row>
            <Row>
              <Col md={2}><strong>Repository Full Name</strong></Col>
              <Col md={2}>{full_name}</Col>
            </Row>
            <Row>
              <Col md={2}><strong>Repository ID</strong></Col>
              <Col md={2}>{id}</Col>
            </Row>
            <Row>
              <Col md={2}><strong>Default Branch</strong></Col>
              <Col md={2}>{default_branch}</Col>
            </Row>
            <Row>
              <Col md={2}><strong>Created Date</strong></Col>
              <Col md={2}>{moment(created_at).format('MM-DD-YYYY')}</Col>
            </Row>
            <Row>
              <Col md={2}><strong>Updated Date</strong></Col>
              <Col md={2}>{moment(updated_at).format('MM-DD-YYYY')}</Col>
            </Row>
            <Row>
              <Col md={2}><strong>Pushed Date</strong></Col>
              <Col md={2}>{moment(pushed_at).format('MM-DD-YYYY')}</Col>
            </Row>
            <Row>
              <Col md={2}><strong>Clone URL</strong></Col>
              <Col md={2}>{clone_url}</Col>
            </Row>
            <Row>
              <Col md={2}><strong>Watchers Count</strong></Col>
              <Col md={2}>{watchers_count}</Col>
            </Row>
            <Row>
              <Col md={2}><strong>License</strong></Col>
              <Col md={2}>{license && license.name ? license.name : '-'}</Col>
            </Row>
            <Row>
              <Col md={2}><strong>See Commit Details</strong></Col>
              <Col md={2}><span onClick={() => this.handleClick()}>Go</span></Col>
            </Row>
          </Col>
        </Grid>
      );
    }
    return null;
  }
}

export default withRouter(RepositoryDetailsComponent);

