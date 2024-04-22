const options = {
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
            // para manipular os dados JSON recebidos da API
            // DESCOMENTAR APOS CRIAR O DATA const appInstance = App(data); // Passa os dados obtidos para o componente App. Responsável por processar esses dados e criar um componente ou estrutura de dados que será renderizado na interface do usuário
            // Adiciona o componente renderizado ao elemento com id 'root'
        })
        .catch(error => console.error('Erro ao obter dados da API: ou sei lá', error)); // para lidar com erros que ocorrem durante a execução da promessa
}

