import React, { Component } from 'react';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider><Router>
    <div className="App">
    <Header branding='Contact Manager'/>    
    <div className='container'>  
    <Switch>
    <Route exact path="/" component={Contacts}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact/add" component={AddContact}/>
    </Switch>
    </div>
    </div>
    </Router></Provider>
  );
}

export default App;
