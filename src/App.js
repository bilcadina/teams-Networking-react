import { Component } from 'react';
import './App.css';
import { PersonsTable } from "./PersonsTable";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    }
  }

  componentDidMount() {
    console.warn('mount');
    setTimeout(() => {
      console.warn("loaded");
    }, 2000);
    this.setState({
      persons: [{
        "id": "a123",
        "firstName": "Bilc",
        "lastName": "Adina",
        "gitHub": "https://github.com/bilcadina"
      },
      {
        "id": "b563",
        "firstName": "Carunt",
        "lastName": "Filip",
        "gitHub": "https://github.com/bilcadina"
      }]
    })
  }

  render() {
    console.debug(this.state.persons);
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <PersonsTable persons={this.state.persons} border={1} />
      </div>
    );
  }
}
export default App;
