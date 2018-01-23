import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import moment from 'moment';
import {Table, Grid} from 'react-bootstrap';
import {TwitterTrendsComponent} from "../trendsComponent";
import {TwitterHashTagsComponent} from "../hashtagsComponent";
import {TwitterCollectionsComponent} from "../collectionsComponent";
import { Switch, BrowserRouter,Route, browserHistory} from 'react-router-dom';

export class TwitterMainComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Grid>
          <Link className="router-link" to='/'>back</Link>

          <Link className="router-link" to='/twitter/trends'>Trends</Link>
          <Link className="router-link" to='/twitter/HashTags'>HashTags</Link>
          <Link className="router-link" to='/twitter/Collections'>Collections</Link>
            <div>
                <Route path={`${this.props.match.path}/trends`} component={TwitterTrendsComponent} />
                <Route path={`${this.props.match.path}/HashTags`} component={TwitterHashTagsComponent} />
                <Route path={`${this.props.match.path}/Collections`} component={TwitterCollectionsComponent} />
            </div>
        </Grid>
    )
  }
}

export default withRouter(TwitterMainComponent);