import { App } from './components/App.js';
//import home from './lib/pages/home/index.js';
//import about from './lib/pages/about/index.js';
//import contact from './lib/pages/contact/index.js';
import { getMovies } from './lib/tmdb.js';
getMovies().then((data) => {
    document.getElementById('root').appendChild(App(data)); // adicionando o componente como filho do elemente root
})

