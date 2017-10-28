import * as React from 'react';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera();
const renderer = new THREE.WebGLRenderer();

let theta = 0;

const init = (element: HTMLDivElement) => {
  const universeCube = new THREE.CubeTextureLoader().load(
    [
      'textures/universe/nebula-xpos.png',
      'textures/universe/nebula-xneg.png',
      'textures/universe/nebula-ypos.png',
      'textures/universe/nebula-yneg.png',
      'textures/universe/nebula-zpos.png',
      'textures/universe/nebula-zneg.png',
    ]
  );
  universeCube.format = THREE.RGBFormat;
  scene.background = universeCube;

  camera.fov = 15;
  camera.aspect = element.clientWidth / element.clientHeight;
  camera.near = 1;
  camera.far = 2000;

  renderer.setSize(element.clientWidth, element.clientHeight);

  element.appendChild(renderer.domElement);
};

const animate = () => {
  requestAnimationFrame(animate);
  update();
};

const update = () => {
  // camera.position.x += 10;
  let posX = Math.sin(theta);
  let posY = Math.cos(theta);
  theta += Math.PI / 180;

  const pos = new THREE.Vector3(posX, posY, 0);
  camera.lookAt(pos);
  renderer.render(scene, camera);
};

// type EnhancedComponentProps = React.Props & {
//   three: {
//     init: (element: HTMLDivElement) => void;
//     animate: () => void;
//     update: () => void;
//     scene: THREE.Scene;
//   }
// }

export default function createScene() {
  function enhance(BaseComponent: any): React.ComponentClass {
    class EnhancedComponent extends React.Component {
      static displayName: string;

      render() {
        const three = {
          init,
          animate,
          update,
          scene
        };
        const enhanceProps = this.props;
        return (
          <BaseComponent {...enhanceProps} three={three} />
        );
      }
    }

    EnhancedComponent.displayName = `inScene(${getDisplayName(BaseComponent)})`;
    return EnhancedComponent;
  }

  function getDisplayName(WrappedComponent: React.ComponentType) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return enhance;
}