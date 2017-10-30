import * as React from 'react';
import * as THREE from 'three';
import * as enzyme from 'enzyme';
import { WebSocket, Server } from 'mock-socket';

import Camera, { CameraProps } from './Camera';

describe('初次加载', () => {
  let cameraProps: CameraProps;
  beforeEach(() => {
    cameraProps = {
      position: {
        x: 1,
        y: 200,
        z: 200
      },
      lookAt: {
        x: 0,
        y: 1,
        z: 0
      },
      camera: new THREE.Camera()
    };
  });
  test('组件的状态应当与传入的 props 一致', () => {
    const wrapper = enzyme.shallow(<Camera {...cameraProps}/>);
    expect(wrapper.state('position')).toEqual(cameraProps.position);
    expect(wrapper.state('lookAt')).toEqual(cameraProps.lookAt);
  });
});

describe('threejs 接口', () => {
  let cameraProps: CameraProps;
  beforeEach(() => {
    cameraProps = {
      position: {
        x: 1,
        y: 2,
        z: 0
      },
      lookAt: {
        x: 1,
        y: 1,
        z: 0
      },
      camera: new THREE.Camera()
    };
  });

  test('组件 position 状态应该能正确地传给接口', () => {
    const wrapper = enzyme.shallow(<Camera {...cameraProps}/>);
    expect(wrapper.instance().props.camera.position).toEqual(cameraProps.position);
  });
  test('组件 lookAt 状态应该能正确地传给接口', () => {
    const wrapper = enzyme.shallow(<Camera {...cameraProps}/>);
    const {x: posX, y: posY, z: posZ} = cameraProps.position;
    const {x: lookX, y: lookY, z: lookZ} = cameraProps.lookAt;
    const currentDirection = (new THREE.Vector3(lookX, lookY, lookZ)).sub(new THREE.Vector3(posX, posY, posZ));
    const {x: currX, y: currY, z: currZ} = currentDirection;
    const currentDirectionLength = Math.pow(currX * currX + currY * currY + currZ * currZ, 0.5);

    const direction = wrapper.instance().props.camera.getWorldDirection();
    expect(direction.x).toBeCloseTo(currX / currentDirectionLength);
    expect(direction.y).toBeCloseTo(currY / currentDirectionLength);
    expect(direction.z).toBeCloseTo(currZ / currentDirectionLength);
  });
});