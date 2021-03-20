import React from 'react';
import Search from './containers/Search'
import Books from './containers/Books'
import './home.css'


const Home = () => (
  <div id="home" className="page">
    <div className="container">
      <React.StrictMode>
      <Search />
      <Books />
      </React.StrictMode>
    </div>
  </div>
)
export default Home;