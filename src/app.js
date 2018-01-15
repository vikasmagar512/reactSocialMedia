import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, browserHistory} from 'react-router-dom';
import Home from './home';
import {RepositoryComponent} from './component/repositoryComponent';
import {RepositoryDetailsComponent} from './component/repositoryDetailsComponent';
import {CommitsComponent} from './component/commitsComponent';
import {CommitsDetailsComponent} from './component/commitsDetailsComponent';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/repository' component={RepositoryComponent}/>
                    <Route path='/repositorydetails' component={RepositoryDetailsComponent}/>
                    <Route path='/commits' component={CommitsComponent}/>
                    <Route path='/commitdetails' component={CommitsDetailsComponent}/>
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>

        )
    }
}

const NotFound = () => (
  <h1>404.. This page is not found!</h1>);

export default App;