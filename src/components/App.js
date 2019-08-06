import React from 'react';
import '../index.css';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Temperature from './pages/Temperature'
import CustomizeImage from './pages/CustomizeImage'
import Celebrities from './pages/Celebrities'


function App() {
  return (
    <div className="App">
    {
      // <nav>
      //   <Link to="/">Home</Link>
      //   <Link to="/temperature">Temperature</Link>
      //   <Link to="/customize-image">Customize Image</Link>
      //   <Link to="/celebrities">Celebrities</Link>
      // </nav>
    }
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/temperature" exact component={Temperature} />
        <Route path="/customize-images" exact component={CustomizeImage} />
        <Route path="/celebrities" exact component={Celebrities} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
