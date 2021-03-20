import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// Configure routes
import Home from './screens/home/index';
import Book from './screens/book/index';
import CreateBook from './screens/createBook/index';

export default (
  <BrowserRouter>
    
    <Route exact path="/" component={Home}/>
    <Route exact path="/book/:ID" component={Book}/>
    <Route exact path="/create" component={CreateBook}/>

  </BrowserRouter>
);