import React from 'react';
import {RepositoryComponent} from '../../../src/component/repositoryComponent';
import renderer from 'react-test-renderer';

describe('Repository Component', () => {
  it('renders Repository Component correctly', () => {
    const tree = renderer.create(
      <RepositoryComponent />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
