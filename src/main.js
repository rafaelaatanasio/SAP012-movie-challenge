import {App} from './components/App.js';
import {getMovies} from './lib/tmdb.js';
getMovies().then((data) => {
    document.getElementById('root').appendChild(App(data)); // adicionando o componente como filho do elemente root

}) 



// DEVO COLOCAR TODOS ESSES DENTRO DO THEN DATA, COMO O ROOT?? ACHO QUE N, ROOT ESTÁ MOSTRANDO EM TELA O QUE VOU CRIAR NO APP JS
const filter = document.getElementById('filter');
const order = document.getElementById('order');
const input = document.getElementById('movieId');
const btn = document.getElementById('button-go');

/*
buttonGo.addEventListener('click', () => {

});*/
