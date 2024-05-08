import App, { Back } from './components/App.js';
import { getMovies, getId } from './lib/tmdb.js';

const main = document.querySelector("#root");

const verifyHash = () => {
    if (window.location.hash.startsWith("#details")) {
        const movieId = window.location.hash.slice(9);
        // Verifica se o ID do filme é um número válido antes de chamar getId()
        if (!isNaN(movieId)) {
            getId(movieId).then((data) => {
                if (data) {
                    main.innerHTML = ""; // Limpa o conteúdo principal
                    main.appendChild(Back(data)); // Adiciona os detalhes do filme
                } else {
                    console.error('Dados do filme não encontrados');
                }
            }).catch(error => console.error('Erro ao obter dados do filme: ', error));
        } else {
            console.error('ID do filme inválido');
        }
    } else {
        getMovies().then((data) => {
            if (data) {
                main.innerHTML = ""; // Limpa o conteúdo principal
                main.appendChild(App(data)); // Adiciona a lista de filmes
            } else {
                console.error('Dados dos filmes não encontrados');
            }
        }).catch(error => console.error('Erro ao obter dados dos filmes: ', error));
    }
};

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = ""; // Limpa o conteúdo principal ao mudar o hash
        verifyHash();
    });
};

window.addEventListener('load', () => {
    verifyHash();
    init(); // Inicializa a aplicação
});
