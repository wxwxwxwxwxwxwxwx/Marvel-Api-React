import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';


import './style/style.scss';

// const marvelService = new MarvelService();

// marvelService.getAllCharacters().then(res => console.log(res))
// marvelService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)))
// marvelService.getCharacterById(1011052).then(res => console.log(res))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

