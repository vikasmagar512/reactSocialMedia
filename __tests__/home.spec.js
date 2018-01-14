import React from 'react';
import Home from '../src/home';
import renderer from 'react-test-renderer';
import {withRouter} from 'react-router-dom'

const Component = () => <Home />
const WrappedComponent = withRouter(Component)

it('will render', () => expect(renderer.create(<Component />)).toBeDefined())
it('will fail', () => renderer.create(<WrappedComponent />))