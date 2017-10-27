import * as THREE from 'three';

/**
 * 
 * 
 * @export
 * @param {number} [size=1] 
 * @param {[number, number, number]} [scale=[1, 1, 1]] 
 * @returns 
 */
export function createStarGeo(size: number = 1, scale: [number, number, number] = [1, 1, 1]) {
  const geo = new THREE.SphereGeometry(size, 9, 9);
  return geo;
}