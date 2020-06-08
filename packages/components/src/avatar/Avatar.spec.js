import React from 'react';
import { shallow } from 'enzyme';

import Avatar from './';

describe('Avatar', () => {
  let props = {
    size: Avatar.Size.MEDIUM,
    children: '😎',
  };
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Avatar {...props} />)));

  it('should render the given children', () => {
    expect(wrapper.text()).toBe(props.children);
  });

  it('should have size modifier on the base element', () => {
    expect(wrapper.hasClass('avatar--md')).toBe(true);
  });

  it('should NOT have outline modifier on the base element', () => {
    expect(wrapper.hasClass('avatar--outlined')).toBe(false);
  });

  describe('when we pass outlined prop', () => {
    beforeEach(() => wrapper.setProps({ outlined: true }));

    it('should have an outline modifier on the base element', () => {
      expect(wrapper.hasClass('avatar--outlined')).toBe(true);
    });
  });
});
