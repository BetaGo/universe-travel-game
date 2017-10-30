import * as React from 'react';
import * as enzyme from 'enzyme';
import * as THREE from 'three';

import Universe, { UniverseProps } from './Universe';

describe('能渲染出一片寂静的宇宙', () => {
  const mockThree = {
      init: jest.fn(),
      animate: jest.fn(),
      update: jest.fn(),
      scene: new THREE.Scene()
  };

  const universeProps: UniverseProps = {
    currentUser: {
      id: '10000',
      name: 'xiaomig',
      position: {x: 1000, y: 200, z: 100},
      faceTo: {x: 1, y: 0, z: 0}
    }
  };
  test('能正确初始化', () => {
    enzyme.shallow(<Universe {...universeProps} three={mockThree} />);
    expect(mockThree.init).toBeCalled();
  });
  test('能正确开始动画', () => {
    enzyme.shallow(<Universe {...universeProps} three={mockThree} />);
    expect(mockThree.animate).toBeCalled();
  });
});
