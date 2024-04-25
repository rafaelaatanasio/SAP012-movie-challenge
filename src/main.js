import { App, Back } from './components/App.js';
import { getMovies } from './lib/tmdb.js';

const main = document.querySelector("#root");

const getId = () => {
    return window.location.hash.slice(9);
};

getMovies().then((data) => { // Obtém os dados de todos os filmes
    document.getElementById('root').appendChild(App(data)); // adicionando o componente como filho do elemente root
})

const init = (data) => { // A função init agora recebe dados como argumento     
    window.addEventListener("hashchange", () => {
        main.innerHTML = ""; // Limpa o conteúdo principal ao mudar o hash
            if (window.location.hash.startsWith("#details")) {
            }
          else {
                main.appendChild(App(data));                
            }
    });
}

window.addEventListener('load', () => { // escutador, falta template // escutador de carregamento
   //    main.appendChild(App(data))  // Adiciona o componente principal com os dados de todos os filmes
   // init(data); // Inicializa a aplicação passando os dados
});