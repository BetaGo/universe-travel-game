import * as THREE from 'three';

interface StarGeoProps {
  basicSize: number;
  scale:[number, number, number];
}

export const createStar = (starProps: StarGeoProps) => {
  const starGeo = new THREE.SphereGeometry(starProps.basicSize, 9, 9);
  return starGeo;
};
