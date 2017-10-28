import * as React from 'react';
import * as THREE from 'three';

import User, { UserProps } from './User';
import Star, { StarProps } from './Star';

import './Universe.css';

export interface UniverseProps {
  currentUser: UserProps;
  otherUsers?: Array<UserProps>;
  stars?: Array<StarProps>;
  
}

type Props = UniverseProps & {
  three: {
    init: (element: HTMLDivElement) => void;
    animate: () => void;
    update: () => void;
    scene: THREE.Scene;
  }
};

class Universe extends React.Component<Props> {
  domElement: HTMLDivElement;
  scene: THREE.Scene;
  componentDidMount() {
    this.props.three.init(this.domElement);
    this.props.three.animate();
  }

  getCurrentUser() {
    const { currentUser } = this.props;
    return <User {...currentUser} scene={this.props.three.scene}/>;
  }

  getStars() {
    const { stars } = this.props;
    if (stars) {
      stars.map(starProps => {
        return <Star key={starProps.id} scene={this.scene} {...starProps} />;
      });
    }
  }

  render() {
    return (
      <div className="universe" ref={e => this.domElement = e as HTMLDivElement} />
    );
  }
}

export default Universe;
