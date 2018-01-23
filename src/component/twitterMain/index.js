import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import moment from 'moment';
import {Table, Grid} from 'react-bootstrap';
import {TwitterTrendsComponent} from "../trendsComponent";

export class TwitterMainComponent extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
      return (
        <Grid>
          <Link className="router-link" to='/'>back</Link>
          <Link className="router-link" to='/twitter/'>Trends</Link>
          {/*<Link className="router-link" to='/twitter/HashTags'>HashTags</Link>*/}
          {/*<Link className="router-link" to='/twitter/Collections'>Collections</Link>*/}

            <div>
                <Route exact path={this.props.match.path} component={TwitterTrendsComponent} />
                {/*<Route path={`${this.props.match.path}/HashTags`} component={HomePageOne} />*/}
                {/*<Route path={`${this.props.match.path}/Collections`} component={HomePageTwo} />*/}
            </div>
        </Grid>
      );
    }
}

export default withRouter(TwitterMainComponent);
/*
export class TwitterTrendsComponent extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return {
            <h1>trends</h1>
        }
    }
}

export withRouter(TwitterTrendsComponent);
*/
