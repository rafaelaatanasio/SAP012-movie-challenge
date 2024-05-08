const App = (data) => {
  // Verifica se há dados e se há resultados
  if (!data || !data.results || data.results.length === 0) {
    return null; // Retorna nulo se não houver dados ou resultados
  }

  const el = document.createElement('div');
  el.classList.add('poster-container');

  data.results.forEach((item) => {
    // Verifica se há informações importantes antes de renderizar
    if (!item.id || !item.title || !item.poster_path || !item.release_date) {
      return; // Ignora este item se estiver faltando informações importantes
    }

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
};

const Back = (data) => {
  // Verifica se há dados
  if (!data) {
    return null; // Retorna nulo se não houver dados
  }

  const details = document.createElement('div');
  details.classList.add('poster-container');

  // Verifica se há informações importantes antes de renderizar
  if (!data.title || !data.poster_path || !data.overview || !data.release_date) {
    return null; // Retorna nulo se estiver faltando informações importantes
  }

  details.innerHTML += `
    <div class="poster-container">
      <h2 itemprop="title" class="back_title">${data.title}</h2>
      <div class="back_link_container">
        <a href="/#root" class="link_back">Voltar</a>
      </div>
      <dl itemscope itemtype="Filmes" class="back_card">
        <dt><img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="Imagem do Filme" class="image__card"></dt>
        <div class="back_info">
          <dd itemprop="overview" class="overview">${data.overview}</dd>
          <dd itemprop="release_date" class="releaseDate">Lançamento em ${data.release_date}</dd>
        </div>
      </dl>
    </div>
  `;

  return details;
};

export { App, Back }; // Exporta as funções
