import * as React from 'react';
import * as enzyme from 'enzyme';
import * as THREE from 'three';

import Star, { StarProps } from './Star';

const starProps: StarProps = {
  id: '1000',
  name: 'x-1000',
  physicalInfo: {
    size: 10,
    position: [1, 10, 100]
  }
};

describe('Star 渲染', () => {
  test('要能正确创建模型', () => {
    const scene = new THREE.Scene();
    const wrapper = enzyme.shallow(<Star scene={scene}  {...starProps} />);
    expect(wrapper.instance()).toHaveProperty('starMesh');
  });

  test('要能将模型添加到场景', () => {
    const scene = new THREE.Scene();
    enzyme.shallow(<Star scene={scene} {...starProps} />); // 添加一个模型到 scene
    enzyme.shallow(<Star scene={scene} {...starProps} />); // 添加一个模型到 scene

    expect(scene.children).toHaveLength(2);
  });

  test('组件卸载后，模型应当移除', () => {
    const scene = new THREE.Scene();
    const wrapper1 = enzyme.shallow(<Star scene={scene} {...starProps} />);
    const wrapper2 = enzyme.shallow(<Star scene={scene} {...starProps} />);

    wrapper1.unmount();
    expect(scene.children).toHaveLength(1);
    
    wrapper2.unmount();
    expect(scene.children).toHaveLength(0);
  });
});