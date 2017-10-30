import * as React from 'react';
import * as THREE from 'three';

export interface StarPhysicalInfo {
  size: number;
  position: {
    x: number,
    y: number,
    z: number
  };
}

export interface StarProps {
  id: string;
  name: string;
  physicalInfo: StarPhysicalInfo;
}

type Props = StarProps & {
  scene: THREE.Scene
};

export const createStar = (config: StarPhysicalInfo) => {
  const starGeo = new THREE.SphereGeometry(config.size);
  const material = new THREE.MeshLambertMaterial();
  const mesh = new THREE.Mesh(starGeo, material);
  const {x, y, z} = config.position;
  mesh.position.set(x, y, z);

  return mesh;
};

class Star extends React.Component<Props> {
  
  starMesh: THREE.Mesh;

  componentWillMount() {
    this.starMesh = createStar(this.props.physicalInfo);
  }
  componentDidMount() {
    this.props.scene.add(this.starMesh);
  }
  componentWillUnmount() {
    this.props.scene.remove(this.starMesh);
  }

  render() {
    return null;
  }
}

export default Star;
