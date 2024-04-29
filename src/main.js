import { App, Back } from './components/App.js';
import { getMovies, getId } from './lib/tmdb.js';

const main = document.querySelector("#root");

const verifyHash = () => {
    if (window.location.hash.startsWith("#details")) {
        getId(window.location.hash.slice(9)).then((data) => { // Obtém os dados de todos os filmes
            document.getElementById('root').appendChild(Back(data)); // adicionando o componente como filho do elemente root; // retorna o ID do filme do hash da URL
        })
        console.log(window.location.hash.startsWith("#details"))
    }
    else {
        getMovies().then((data) => { // Obtém os dados de todos os filmes
            document.getElementById('root').appendChild(App(data)); // adicionando o componente como filho do elemente root
        })
    }
};

const init = () => { // A função init agora recebe dados como argumento     
    window.addEventListener("hashchange", () => {
        main.innerHTML = ""; // Limpa o conteúdo principal ao mudar o hash
        verifyHash()
    });
}

window.addEventListener('load', () => { // escutador, falta template // escutador de carregamento
    verifyHash()
    init(); // Inicializa a aplicação passando os dados
});