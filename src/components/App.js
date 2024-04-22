export const App = (data) => {

  // aqui crio um elemento de div
  const el = document.createElement('div');

  data.results.forEach((item) => {
    el.innerHTML += `<p> olar ${item.title} </p>
        
    <li itemscope itemtype="Rota dos Sonhos" class="list__card">
    <div class="container__card">
      <dl itemscope itemtype="RoteirosDosSonhos" class="content__card">
        <div class="front">
          <dt><img src="${item.imageUrl}" alt="Imagem do Destino" itemprop="${item.name}" class="image__card" /></dt>
          <h2 itemprop="sort-order" class="name">${item.name} - ${item.facts.brState}</h2>
          <dd itemprop="shortDescription" class="shortDescription">${item.shortDescription}</dd>
          <dd itemprop="caracteristicas" class="someFeatures">${item.facts.someFeatures}</dd>
          <dd itemprop="itineraryType" class="itineraryType">${item.facts.itineraryType}</dd>
          <dd itemprop="estimatedValue" class="estimatedValue">${item.facts.estimatedValue}</dd>
        </div>
        <div class="back">
          <dd itemprop="description" class="description">${item.description}</dd>
          <dd itemprop="bestActivities" class="bestActivities">${item.facts.bestActivities}</dd>
          <dd itemprop="bestMonth" class="bestMonth">${item.facts.bestMonth}</dd>
        </div>
      </dl>
    </div>
  </li>`


  
  });
return el;
}