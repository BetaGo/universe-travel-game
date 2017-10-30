import * as React from 'react';
import * as enzyme from 'enzyme';
import * as THREE from 'three';

import User, { UserProps, createUser } from './User';

const userProps: UserProps = {
  id: '10000',
  name: 'xiaoming',
  position: {x: 1, y: 2, z: 3},
  faceTo: {x: 1, y: 0, z: 0}
};

describe('User Threejs 调用', () => {
  test('createUser 方法应该正确执行', () => {
    const mesh = createUser(1, {x: 1, y: 1, z: 0});
    expect(mesh.position).toEqual(new THREE.Vector3(1, 1, 0));
  });
});

describe('User 组件渲染', () => {
  test('要能正确的创建模型', () => {
    const scene = new THREE.Scene();
    const wrapper = enzyme.shallow(<User scene={scene} {...userProps} />);

    // 渲染后的组件的实例中，要有 userMesh
    expect(wrapper.instance()).toHaveProperty('userMesh');
  });
  test('要能将模型添加到场景', () => {
    const scene = new THREE.Scene();
    enzyme.shallow(<User scene={scene} {...userProps} />); // 添加一个模型到 scene
    enzyme.shallow(<User scene={scene} {...userProps} />);
    expect(scene.children).toHaveLength(2); // 添加了两次
  });
  test('组件卸载后，模型应当从场景中移除', () => {
    const scene = new THREE.Scene();
    const wrapper1 = enzyme.shallow(<User scene={scene} {...userProps} />); // 添加一个模型到 scene
    const wrapper2 = enzyme.shallow(<User scene={scene} {...userProps} />);

    wrapper1.unmount();
    expect(scene.children).toHaveLength(1);

    wrapper2.unmount();
    expect(scene.children).toHaveLength(0);
  });
});