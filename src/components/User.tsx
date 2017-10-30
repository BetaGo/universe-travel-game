import * as React from 'react';
import * as THREE from 'three';

export interface UserProps {
  id: string;
  name: string;
  position: {
    x: number,
    y: number,
    z: number
  };
  faceTo: {
    x: number,
    y: number,
    z: number
  };
}

type Props = UserProps & {
  scene: THREE.Scene
};

export function createUser(size: number, position: {x: number, y: number, z: number}) {
  const userGeo = new THREE.SphereGeometry(size, 9, 9);
  const material = new THREE.MeshPhongMaterial();
  const mesh = new THREE.Mesh(userGeo, material);
  const {x, y, z} = position;
  mesh.position.set(x, y, z);
  return mesh;
}

class User extends React.Component<Props> {
  userMesh: THREE.Mesh;
  
  componentWillMount() {
    this.userMesh = createUser(1, this.props.position);
  }
  componentDidMount() {
    this.props.scene.add(this.userMesh);
  }
  componentWillUnmount() {
    this.props.scene.remove(this.userMesh);
  }

  render() {
    return null;
  }
}

export default User;