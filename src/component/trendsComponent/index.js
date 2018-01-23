import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import moment from 'moment';
import {Table, Grid} from 'react-bootstrap';

export class TwitterTrendsComponent extends Component {
  constructor(props) {
    super(props);
    this.getCommits = this.getCommits.bind(this);
  }
    componentDidMount() {
        this.getCommits();
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
    render() {
        return (
          <h1>Trends</h1>
        );
    }
}

export default withRouter(TwitterTrendsComponent );
