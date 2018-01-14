/**
 * Created by chetan on 14/01/18.
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import {RepositoryComponent} from './component/repositoryComponent';
import {RepositoryDetailsComponent} from './component/repositoryDetailsComponent';
import {CommitsComponent} from './component/commitsComponent';
import {CommitsDetailsComponent} from './component/commitsDetailsComponent';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/repository' component={RepositoryComponent}/>
      <Route path='/repositorydetails' component={RepositoryDetailsComponent}/>
      <Route path='/commits' component={CommitsComponent}/>
      <Route path='/commitdetails' component={CommitsDetailsComponent}/>
    </Switch>
  </main>
)

export default Routes