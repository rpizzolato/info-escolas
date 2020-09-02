import React, { Component } from 'react'
import data from '../../data/escolas.json';

class Main extends Component {
  state = {
    schools: []
  };

  componentDidMount() {
    this.loadSchools();
  }

  loadSchools = () => {
    this.setState({
      schools: data.escolas
    });
  }

  render() {
    const { schools } = this.state;

    return(
      <div className="schools-list">
        {schools.map(school => (
          <article>
            <strong>{school.nome}</strong>
            <span>{school.endereco}</span>
            <span>{school.bairro}</span>
            <span>{school.loteamento}</span>
            <span>{school.regiao}</span>
            <span>{school.telefone.primario}</span>
            <span>{school.telefone.secundario}</span>
            <span>{school.localizacao.latitude}</span>
            <span>{school.localizacao.longitude}</span>
          </article>
        ))}
      </div>
    );
  }
}

export default Main;
