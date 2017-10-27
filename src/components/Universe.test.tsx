import * as React from 'react';
import * as enzyme from 'enzyme';

import Universe, { UniverseProps } from './Universe';

const UniverseProps: UniverseProps = {
  currentUser: {
    name: 'xiaomig',
    position: [1000, 200, 100],
    faceTo: [1, 0, 0],
  }
};

it('能渲染出一片寂静的宇宙', () => {
  const wrapper = enzyme.shallow(<Universe {...UniverseProps} />, {
    lifecycleExperimental: false,
    disableLifecycleMethods: true,
  } as enzyme.ShallowRendererProps);
  expect(wrapper.find('.universe').length).toBe(1);
});

it('能渲染出当前用户', () => {
  const wrapper = enzyme.shallow(<Universe {...UniverseProps}/>, {
    lifecycleExperimental: false,
    disableLifecycleMethods: true,
  } as enzyme.ShallowRendererProps);
  expect(wrapper.find('User').length).toBe(1);
});
