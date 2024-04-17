import App from './components/App.js';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDkzNjA4NGFiNjU3ZjA1OGMxMzczODk1MDI4MWVmNyIsInN1YiI6IjY2MGQ4YmMyZDQwMGYzMDE2NDA1ZDhjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bLbpeBECzSBZJHtkDKdfY9whOAQrFSDZBXGJVHwselc'
    }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json()) // função fetch com objeto response do http e depois chamar com json pra converter
    .then(data => { //Essa promessa resultante pode ser encadeada com outra .then() para manipular os dados JSON recebidos da API
        // Passa os dados obtidos para o componente App
        const appInstance = App(data);
        // Adiciona o componente renderizado ao elemento com id 'root'
        document.getElementById('root').appendChild(appInstance); // aqui veio na documentação
    })
    .catch(error => console.error('Erro ao obter dados da API: ou sei lá', error)); // para lidar com erros que ocorrem durante a execução da promessa
