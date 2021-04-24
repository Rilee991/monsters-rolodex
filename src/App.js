import { Component } from 'react';

import './App.css';
import CardList from './components/card-list-component';
import SearchBox from './components/search-box/search-box-component';

class App extends Component {
  constructor() {
    super(); //calls the contructor method on the component class.

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  render () {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ));

    return (
      <div className="App">
        <h1>Harry Potter and The Half Blood Prince</h1>
        <SearchBox 
          placeholder="search monster"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
