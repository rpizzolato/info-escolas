import React, { Component } from 'react'
import './style.css';

class Schools extends Component {
  render() {

    return(
      <div className="container">
        <section className="schools">
          <article className="school">
            <span className="school__data">Escola</span>
            <span className="school__data">Telefone</span>
            <span className="school__data">Endereço</span>
            <span className="school__data">Bairro</span>
            <span className="school__data">Loteamento</span>
            <span className="school__data">Região</span>
            <span className="school__data">Localização</span>
          </article>
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default Schools;
