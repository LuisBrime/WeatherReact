import React from 'react';
import Search from './components/Search';
import Info from './components/Info';

class App extends React.Component {
  render() {
    return (
      <div >
          <Search />
          <Info />
      </div>
    );
  }
}

export default App;