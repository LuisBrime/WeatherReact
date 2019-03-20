import React from 'react';
import Search from './components/Search';
import Info from './components/Info';
import { BrowserRouter, Route } from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <div >
        <Search />
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Info} />
            <Route path='/:id' component={Info} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;