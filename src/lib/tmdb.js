const options = { // história de usuário 1
    method: 'GET', // indicando que a solicitação será uma solicitação de leitura de dados da API. Em uma solicitação GET, os parâmetros são enviados na URL da solicitação.
    headers: { // cabeçalho. 
        accept: 'application/json', // Define o tipo de conteúdo que o cliente está disposto a aceitar da API. No caso JSON
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDkzNjA4NGFiNjU3ZjA1OGMxMzczODk1MDI4MWVmNyIsInN1YiI6IjY2MGQ4YmMyZDQwMGYzMDE2NDA1ZDhjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bLbpeBECzSBZJHtkDKdfY9whOAQrFSDZBXGJVHwselc'
    }
};

export function getMovies() {

    //JSON Objeto javascript
    // função fetch('url' e o options (variável que criei na linha 5)) faz solicitações http. Aqui enviei uma solicitação get para a url que peguei. A API.
    return fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json()) // função .then() é encadeada para manipular a resposta da solicitação. Neste caso, a resposta HTTP é convertida em formato JSON usando o método .json()
        .then((data) => {
            return data
        })
        .catch(error => console.error('Erro ao obter dados da API: ', error)); // para lidar com erros que ocorrem durante a execução da promessa
}

const secondPage = { // história de usuário 2
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDkzNjA4NGFiNjU3ZjA1OGMxMzczODk1MDI4MWVmNyIsInN1YiI6IjY2MGQ4YmMyZDQwMGYzMDE2NDA1ZDhjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bLbpeBECzSBZJHtkDKdfY9whOAQrFSDZBXGJVHwselc'
    }
  };
  
  export function getId(movie_id) {

  return fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`, secondPage) // dinâmico
    .then(response => response.json())
    .then((data) => {
        return data
    })
    .catch(error => console.error('Erro ao obter dados da API: ', error));
}

