import * as React from 'react';
import Universe, { UserProps } from '../src/components/Universe';
import './App.css';

const user: UserProps = {
  position: [100, 200, 300],
  faceTo: [1, 0, 1],
  name: 'xiaoming'
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Universe currentUser={user} />
      </div>
    );
  }
}

export default App;
