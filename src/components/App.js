const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = 'oi';

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDkzNjA4NGFiNjU3ZjA1OGMxMzczODk1MDI4MWVmNyIsInN1YiI6IjY2MGQ4YmMyZDQwMGYzMDE2NDA1ZDhjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bLbpeBECzSBZJHtkDKdfY9whOAQrFSDZBXGJVHwselc'
    }
  };

    /* fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
      .then(response => response.json()) // dados em forma de objeto
      .then(response => console.log(response))
      .catch(err => console.error(err));

      // filtrar os filmes que quero mostrar, cards

      // clicar nos filmes e ir para outra página

      // mudar a página conforme clica nos numeros ou 'próxima página'

      // dividir a lista em páginas e permitir que o usuário navegue entre elas

      // ordenar

      // filmar

      // pesquisar

      // página anterior

      // próxima página

      // barra de rolangem
  

*/
  return el;
};

export default App;
