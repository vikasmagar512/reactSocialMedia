import React from 'react';
import {RepositoryDetailsComponent} from '../../../src/component/repositoryDetailsComponent';
import renderer from 'react-test-renderer';

describe('Repository Details Component', () => {
  it('renders Repository Details Component correctly', () => {
    const tree = renderer.create(
      <RepositoryDetailsComponent />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
