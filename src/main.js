import { App } from './components/App.js';
import { getMovies } from './lib/tmdb.js';
getMovies().then((data) => {
    document.getElementById('root').appendChild(App(data)); // adicionando o componente como filho do elemente root
})

