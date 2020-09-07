import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import Schools from './components/Schools';

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <Schools />
    </div>
    
  );
}

export default App;
