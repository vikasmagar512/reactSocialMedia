import React from 'react';
import Welcome from '../src/views/welcome';
import renderer from 'react-test-renderer';

describe('Welcome', () => {
  it('renders Welcome coponent correctly', () => {
    const tree = renderer.create(
      <Welcome name="World" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
