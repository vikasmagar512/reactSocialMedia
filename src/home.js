/**
 * Created by chetan on 14/01/18.
 */
import React from 'react'
import {withRouter} from 'react-router-dom'
import {Button, Grid, Panel} from 'react-bootstrap';

const GITHUB = 'github';
const TWITTER = 'twitter';
class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isActive: false
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.navigateToHome = this.navigateToHome.bind(this);
    }

    handleButtonClick(type=GITHUB) {
        var provider;
        if(type === GITHUB){
            provider = new firebase.auth.GithubAuthProvider();
            provider.addScope('repo');
            provider.setCustomParameters({
                'allow_signup': 'false'
            });
        }else{
            provider = new firebase.auth.TwitterAuthProvider();
        }
        let that = this

        firebase.auth().signInWithPopup(provider).then(function(result) {
            let token = result.credential.accessToken;
            // var secret = result.credential.secret;
            let user = result.user;
            if(type!==GITHUB){
                debugger
                result.acc = TWITTER
                result.oauth_token = 'eV2ETQwZw7qQZwev6bCuTgGM0'
                result.consumerSecretKey = 'qN2xFUqlS4rbLws2phGPiOhjTkYEJumsRfXH3P28cAAenxgdX8'
            }
            that.navigateToHome(result)
        }).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            let email = error.email;
            let credential = error.credential;
        });
    }
    navigateToHome (result) {
        debugger
        const data = JSON.stringify(result);
        console.log(data)
        debugger
        if(result.acc === TWITTER){
            debugger
            localStorage.setItem('firebaseAuthResponseTwitter', data);
            this.props.history.push('/twitter');
        }else{
            localStorage.setItem('firebaseAuthResponse', data);
            this.props.history.push('/repository');
        }
    }
    render() {

        return (
            <Grid className='home-container'>
                <Panel>
                    Login using social media (GitHub)<br />
                    Click Button below to proceed...
                </Panel>
                <Button bsStyle='primary' onClick={() => this.handleButtonClick(GITHUB)}>Login</Button>
                <Button bsStyle='primary' onClick={() => this.handleButtonClick(TWITTER)}>Twitter Login</Button>

            </Grid>
        )
    }
}

export default withRouter(Home)
