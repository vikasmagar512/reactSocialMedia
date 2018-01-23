import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import moment from 'moment';
import {Table, Grid} from 'react-bootstrap';

export class TwitterTrendsComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
          <h1>trends</h1>
      );
  }
}

export default withRouter(TwitterTrendsComponent );
