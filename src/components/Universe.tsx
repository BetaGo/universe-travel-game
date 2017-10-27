import * as React from 'react';

import UniverseThree from '../three/Universe.three';
import User from './User';
import './Universe.css';

export interface UserProps {
  name: string;
  position: [number, number, number];
  faceTo: [number, number, number];
}

export interface Star {
  name: string;
  position: [number, number, number];
  size: number;
}

export interface UniverseProps {
  currentUser: UserProps;
  otherUsers?: Array<User>;
  stars?: Array<Star>;
}

class Universe extends React.Component<UniverseProps> {
  domElement: HTMLDivElement;
  componentDidMount() {
    const universe = UniverseThree(this.domElement);
    universe.init();
    universe.animate();
  }

  getCurrentUser() {
    const { currentUser } = this.props;
    return <User {...currentUser} />;
  }

  render() {
    return (
      <div className="universe" ref={e => this.domElement = e as HTMLDivElement}>
        {this.getCurrentUser()}
      </div>
    );
  }
}

export default Universe;
