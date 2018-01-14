import React from 'react';
import Main from '../src/main';
import renderer from 'react-test-renderer';
import {withRouter} from 'react-router-dom'

const Component = () => <Main />
const WrappedComponent = withRouter(Component)

it('will render', () => expect(renderer.create(<Component />)).toBeDefined())
// it('will fail', () => renderer.create(<WrappedComponent />))