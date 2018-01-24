import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Table, Grid} from 'react-bootstrap';
// import OAuth from '../../oauth-1.0a';
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
        const twitterBaseAPI = 'https://api.twitter.com/1.1/'
        // result.oauth_token = 'eV2ETQwZw7qQZwev6bCuTgGM0'

       const searchString = 'v'
        // const oauth_token = result.oauth_token
        // const oauth_consumer_key = result.consumerSecretKey

        // app credentials
        const appCredentials = {
            consumerKey: 'eV2ETQwZw7qQZwev6bCuTgGM0',
            consumerSecretKey: 'qN2xFUqlS4rbLws2phGPiOhjTkYEJumsRfXH3P28cAAenxgdX8'
        };
        const vikas512Credentials = {
            oauthAccessToken: "3236792029-D6hUPyj8Ur1pws9qHXNcx8qGbpo31jMPdos6iGH",
            oauthTokenSecret: "g2AdtMH3JnXiXApNc1SlEHQLbwS7QcDCURnj62kARnWGA"
        };

        const vikas1993Credentials = {
            oauthAccessToken: "2860784660-OWgKSASFYpDHcoqYE2VtSkCUFZCIRvEeM8Nopz9",
            oauthTokenSecret: "IBYxcUyKVjdDcDhJRyLJj7DTzbza3BqaLmNSDP5F0QbZ7"
        };
        //vikasmagar1993
        // result.credential.accessToken = "2860784660-OWgKSASFYpDHcoqYE2VtSkCUFZCIRvEeM8Nopz9"
        // result.credential.secret = 'IBYxcUyKVjdDcDhJRyLJj7DTzbza3BqaLmNSDP5F0QbZ7'

        const TweetsApi = `https://api.twitter.com/1.1/search/tweets.json?oauth_consumer_key=eV2ETQwZw7qQZwev6bCuTgGM0&oauth_token=3236792029-D6hUPyj8Ur1pws9qHXNcx8qGbpo31jMPdos6iGH&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1516687745&oauth_nonce=UNWIit&oauth_version=1.0&oauth_signature=e5FGEchEiagYotApYcfVA%2BA%2Bgb4%3D&q=v`;
        // const TweetsApi = `https://api.twitter.com/1.1/search/tweets.json?oauth_consumer_key=${appCredentials.consumerKey}&oauth_token=${vikas512Credentials.oauthAccessToken}&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1516687745&oauth_nonce=UNWIit&oauth_version=1.0&oauth_signature=e5FGEchEiagYotApYcfVA%2BA%2Bgb4%3D&q=${searchString}`;
        // const TweetsApi = `search/tweets.json?oauth_consumer_key=${result.oauth_token}&oauth_token=${result.credential.accessToken}&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1516687745&oauth_nonce=UNWIit&oauth_version=1.0&oauth_signature=e5FGEchEiagYotApYcfVA%2BA%2Bgb4%3D&q=${searchString}`;

        // const TweetsApi = `https://api.twitter.com/1.1/search/tweets.json?oauth_consumer_key=eV2ETQwZw7qQZwev6bCuTgGM0&oauth_token=2860784660-OWgKSASFYpDHcoqYE2VtSkCUFZCIRvEeM8Nopz9&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1516687745&oauth_nonce=UNWIit&oauth_version=1.0&oauth_signature=e5FGEchEiagYotApYcfVA%2BA%2Bgb4%3D&q=${searchString}`;
        // const TweetsApi = `https://api.twitter.com/1.1/search/tweets.json?oauth_consumer_key=${appCredentials.consumerKey}&oauth_token=${vikas1993Credentials.oauthAccessToken}&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1516687745&oauth_nonce=UNWIit&oauth_version=1.0&oauth_signature=e5FGEchEiagYotApYcfVA%2BA%2Bgb4%3D&q=${searchString}`;

        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const proxyurl = "https://vikas-cors-proxy.herokuapp.com/";
        const main = this;
        /*fetch(proxyurl+twitterBaseAPI +  TweetsApi)
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
            });*/

        // Initialize
        const oauth = OAuth({
            consumer: {
                key: 'eV2ETQwZw7qQZwev6bCuTgGM0',
                secret: 'qN2xFUqlS4rbLws2phGPiOhjTkYEJumsRfXH3P28cAAenxgdX8'
            }
            /*,
            signature_method: 'HMAC-SHA1',
            hash_function(base_string, key) {
                return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
            }*/
        });
/*
        const request_data = {
            url:proxyurl + twitterBaseAPI + TweetsApi + `&q=${searchString}`,
            // url: 'https://api.twitter.com/1/statuses/update.json?include_entities=true',
            method: 'GET'
            // data: { q: 'v' }
        };

        // Note: The token is optional for some requests
        const token = {
            key: '3236792029-D6hUPyj8Ur1pws9qHXNcx8qGbpo31jMPdos6iGH',
            secret: 'g2AdtMH3JnXiXApNc1SlEHQLbwS7QcDCURnj62kARnWGA'
        };

        $.ajax({
            url: request_data.url,
            type: request_data.method,
            data: oauth.authorize(request_data, token)
        }).done(function(data) {
            // Process your data here
        });*/
    }
  render() {
      return (
          <h1>HashTags</h1>
      );
  }
}

export default withRouter(TwitterHashTagsComponent );
