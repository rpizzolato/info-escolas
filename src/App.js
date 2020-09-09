import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import Schools from './components/Schools';
import School from './components/School';
import data from './data/escolas.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: []
    }
  }

  componentDidMount() {
    this.loadSchools();
  }

  loadSchools = async () => {
    const response = await data.escolas;

    this.setState({
      schools: response
    });
  }

  render(){
    const { schools } = this.state;

    return (
      <div className="App">
        <Header />
        <Filters />
        <Schools>
          {this.state.schools.map(school => <School data={schools} />)}
        </Schools>
        
      </div>
    );
  }
}

export default App;
