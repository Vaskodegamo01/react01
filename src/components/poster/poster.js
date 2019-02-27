import React from 'react';

const Poster = (props) => {
    return (
        <div>
            <header className="App-header">
            <img src={props.link} width="300" height="400" alt="постер"/>
            <h1>Название фильма:{props.name}</h1>
            <p>Год выпуска:{props.year}</p>
            <a className="App-link" target="_blank" rel="noopener noreferrer"  href={props.link}>ссылка на постер</a>
            </header>
        </div>
    )
};

export default Poster;