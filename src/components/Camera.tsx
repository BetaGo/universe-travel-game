import * as React from 'react';
import * as THREE from 'three';

type CameraState = {
  position: {
    x: number,
    y: number,
    z: number
  },
  lookAt: {
    x: number,
    y: number,
    z: number
  },
  fov?: number,
  near?: number,
  far?: number
};

export type CameraProps = CameraState & {
  camera: THREE.Camera
};

class Camera extends React.Component<CameraProps, CameraState> {
  state = {
    position: this.props.position,
    lookAt: this.props.lookAt,
    fov: this.props.fov || 15,
    near: this.props.near || 0,
    far: this.props.far || 2000
  };

  componentDidMount() {
    const {x: posX, y: posY, z: posZ} = this.state.position;
    this.props.camera.position.set(posX, posY, posZ);

    const {x: lookX, y: lookY, z: lookZ} = this.state.lookAt;
    const target = new THREE.Vector3(lookX, lookY, lookZ);
    this.props.camera.lookAt(target);
  }

  render() {
    return null;
  }
}

export default Camera;