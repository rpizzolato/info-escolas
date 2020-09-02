import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header id="main-header">
      <div className="container">
        <div>
          <h3>SME Piracicaba</h3>
        </div>
        <div>
          <input type="text" name="search" placeholder="Pesquisar" />
        </div>
      </div>
      
    </header>
  )
}

export default Header;

