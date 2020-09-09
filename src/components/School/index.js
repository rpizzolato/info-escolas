import React, { Component } from 'react'
import './style.css';
import { FaBlog } from 'react-icons/fa';

class School extends Component {
  render() {
    const { data } = this.props;
    console.log("data " + data)
    return (
      <div className="container">
        <section className="schools">
          <article className="school">
            <span className="school__data">{data.nome}</span>
            <span className="school__data">Teste</span>
            <span className="school__data">Teste</span>
            <span className="school__data">Teste</span>
            <span className="school__data">Teste</span>
            <span className="school__data">Teste</span>
            <span className="school__data">Teste</span>
          </article>
          
        </section>
      </div>
    )
  }
}

export default School;
