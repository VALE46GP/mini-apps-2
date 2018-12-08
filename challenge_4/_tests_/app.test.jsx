/* eslint-env jest */

import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/components/App';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />, { disableLifecycleMethods: true });
  // wrapper.setState({
  // });
});

describe('App Component Unit Tests', () => {
  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
