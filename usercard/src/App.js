import React from 'react';
import axios from "axios";
import Cards from "./components/Cards";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: {},
      following: {},
      followers: {}
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/KennethDyerHill')
    .then((response) => {
      console.log(response);
      this.setState({cards: response.data})
      this.setState({following: response.data.following_url})
      this.setState({followers: response.data.followers_url})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Cards data={this.state.cards} />
      </div>
    );
  }
}



export default App;