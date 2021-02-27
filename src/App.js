import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import Home from './Components/Home/home';
import Business from './Components/Business/business';
import Enertainment from './Components/Entertainment/entertainment';
import Sport from './Components/Sports/sports';
import Technology from './Components/Technology/technology';
import './App.css';


function App() {
  return (
    <div className="bg">
      <div className="head">
        Latest News
      </div>
      <BrowserRouter>
        <header>
          <nav>
            <ul className="unlist">
              <li className="lst">
                <Link to="/home">Home</Link>
              </li>
              <li className="lst">
                <Link to="/business">Business</Link></li>
              <li className="lst">
                <Link to="/entertainment">Enertainment</Link></li>
              <li className="lst">
                <Link to="/sports">Sports</Link></li>
              <li className="lst">
                <Link to="/technology">Technology</Link></li>
            </ul>
          </nav>
        </header>
        <Route path="/home" component={Home} exact />
        <Route path="/business" component={Business} exact />
        <Route path="/entertainment" component={Enertainment} exact />
        <Route path="/sports" component={Sport} exact />
        <Route path="/technology" component={Technology} exact />
      </BrowserRouter>
      <Home/>
    </div>
  );
}

export default App;
