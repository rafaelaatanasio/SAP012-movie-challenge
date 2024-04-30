const App = (data) => {

  // aqui crio um elemento de div
  const el = document.createElement('div');

  // Adiciona uma classe ao elemento principal para estilização
  el.classList.add('poster-container');

  data.results.forEach((item) => {
    el.innerHTML += `
    <div class="poster-container">
    <dl itemscope itemtype="Filmes" class="content__card">
      <dt><a href="/#details-${item.id}"><img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="Imagem do Filme" class="image__card"></a></dt>
      <h2 itemprop="title" class="title">${item.title}</h2>
      <dd itemprop="release_date" class="releaseDate">${item.release_date}</dd>
    </dl>
  </div>
    `;
  });
  return el;
}

export const Back = (data) => {
  const details = document.createElement('div');
  details.classList.add('poster-container');

  details.innerHTML += `
    <div class="poster-container">
      <h2 itemprop="title" class="back_title">${data.title}</h2>
      <div class="back_link_container">
        <a href="/#root" class="link_back">Voltar</a>
      </div>
      <dl itemscope itemtype="Filmes" class="back_card">
        <dt><img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="Imagem do Filme" class="image__card"></dt>
        <div class="back_info"> <!-- Novo elemento para envolver o título e a data -->
          <dd itemprop="overview" class="overview">${data.overview}</dd>
          <dd itemprop="release_date" class="releaseDate">Lançamento em ${data.release_date}</dd>
        </div>
      </dl>
    </div>
  `;
  return details;
}

export default App;
