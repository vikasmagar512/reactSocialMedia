import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Table, Grid} from 'react-bootstrap';

export class TwitterHashTagsComponent  extends Component {
  constructor(props) {
    super(props);
      this.getCommits = this.getCommits.bind(this);
    }
    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('firebaseAuthResponseTwitter'));
        this.getCommits(data);
    }
    getCommits(result) {
       const searchString = 'v'
        const oauth_token = result.oauth_token
        const oauth_consumer_key = result.consumerSecretKey
        // const TweetsApi = `https://api.twitter.com/1.1/search/tweets.json?oauth_consumer_key=eV2ETQwZw7qQZwev6bCuTgGM0&oauth_token=3236792029-D6hUPyj8Ur1pws9qHXNcx8qGbpo31jMPdos6iGH&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1516687745&oauth_nonce=UNWIit&oauth_version=1.0&oauth_signature=e5FGEchEiagYotApYcfVA%2BA%2Bgb4%3D&q=v`;
        const TweetsApi = `https://api.twitter.com/1.1/search/tweets.json?oauth_consumer_key=${oauth_consumer_key}&oauth_token=${oauth_token}&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1516687745&oauth_nonce=UNWIit&oauth_version=1.0&oauth_signature=e5FGEchEiagYotApYcfVA%2BA%2Bgb4%3D&q=${searchString}`;
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const proxyurl = "https://vikas-cors-proxy.herokuapp.com/";
        const main = this;
        fetch(proxyurl+TweetsApi)
            .then(response => {
                if (!response.ok) {
                    throw Error('Network request failed')
                }
                return response
            })
            .then(d => d.json())
            .then( function(data) {
                main.setState({tweets: data});
            })
            .catch( function() {
                main.setState({error: 'error'});
            });
    }
  render() {
      return (
          <h1>HashTags</h1>
      );
  }
}

export default withRouter(TwitterHashTagsComponent );
