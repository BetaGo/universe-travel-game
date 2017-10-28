import * as React from 'react';
import Universe, { UniverseProps } from './components/Universe';
import createScene from './hoc/createScene';
import './App.css';

const universeProps: Partial<UniverseProps> = {
  currentUser: {
    id: '10000',
    name: 'xiaomig',
    position: [1000, 200, 100],
    faceTo: [1, 0, 0],
  }
};

const Enhanced = createScene()(Universe);

const NewUniverse = () => <Enhanced {...universeProps} />;

export default NewUniverse;
