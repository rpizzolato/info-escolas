import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './style.css';

const Header = () => {
  return (
    <header id="main-header">
      <div className="container">
        <div>
          <h3>SME Piracicaba - Pesquisa de Escolas</h3>
        </div>
        <div>
          <input type="text" name="search" placeholder="Pesquisar" /><FaSearch />
        </div>
      </div>
      
    </header>
  )
}

export default Header;

