import React from 'react';
import './style.css';
import { FaSearch, FaCaretDown } from 'react-icons/fa';

const Filters = () => {
  return (
    <div className="content">
      <div className="container">
        <input type="text" placeholder="Pesquisar" />
        <button className="filters__search__icon">
          <FaSearch />
        </button>
        <button className="selected">
          Escola
          <FaCaretDown />
        </button>
        <button>
          Telefone
          <FaCaretDown />
        </button>
        <button>
          Bairro
          <FaCaretDown />
        </button>
        <button>
          Loteamento
          <FaCaretDown />
        </button>
        <button>
          Região
          <FaCaretDown />
        </button>
        <button>
          Localização
          <FaCaretDown />
        </button>
      </div>
    </div>
  )
}

export default Filters;
