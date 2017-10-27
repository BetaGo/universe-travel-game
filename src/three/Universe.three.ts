import * as THREE from 'three';

export default function createUniverse(element: HTMLDivElement) {
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera();
  let renderer = new THREE.WebGLRenderer();
  let theta = 0;

  function init() {
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
  }

  function animate() {
    requestAnimationFrame(animate);
    update();
  }

  function update() {
    // camera.position.x += 10;
    let posX = Math.sin(theta);
    let posY = Math.cos(theta);
    theta += Math.PI / 180;

    const pos = new THREE.Vector3(posX, posY, 0);
    camera.lookAt(pos);
    renderer.render(scene, camera);
  }

  return {
    init,
    scene,
    camera,
    animate
  };
}