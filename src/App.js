import React, { Component } from 'react';
import Poster from "./components/poster/poster"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Poster name="The Matrix" year="1999" link="https://www.kinopoisk.ru/images/film_big/301.jpg"/>
        <Poster name="The Matrix Reloaded" year="2003" link="https://www.kinopoisk.ru/images/film_big/299.jpg"/>
        <Poster name="The Matrix Revolutions" year="2003" link="https://www.kinopoisk.ru/images/film_big/316.jpg"/>
      </div>
    );
  }
}

export default App;
