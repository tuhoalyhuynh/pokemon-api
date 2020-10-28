fetch('https://pokeapi.co/api/v2/pokemon/entei')
.then(response => {
    return response.json();
})
.then(pokeData => {
    const entei = {
        ability: pokeData.abilities[0].ability.name,
        height: pokeData.height,
        weight: pokeData.weight,
        name: pokeData.name,
        move: pokeData.moves[13].move.name,
        image: pokeData.sprites.other['official-artwork']['front_default'],
        purchaseLink: "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1312&_nkw=entei+psa+10&_sacat=2536"
    }
    const enteiCard = makePokemonCard(entei);
    container.appendChild(enteiCard);

})

.catch(error => {
    console.log(error);
})

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

const container = document.querySelector('.container');

function makePokemonCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';

    const imgTag = document.createElement('img');
    imgTag.classList.add('card-img-top');
    imgTag.setAttribute('src', pokemon.image)
    imgTag.setAttribute('alt', `This is ${pokemon.name}`)

    card.appendChild(imgTag);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const pokemonName = document.createElement('h5');
    pokemonName.classList.add('card-title');
    pokemonName.textContent = pokemon.name;

    const heightWeight = document.createElement('p');
    heightWeight.classList.add('card-text');
    heightWeight.textContent = `Height: ${pokemon.height}, Weight: ${pokemon.weight}`;

    const move = document.createElement('p');
    move.classList.add('card-text');
    move.textContent = pokemon.move;

    const ability = document.createElement('p');
    ability.classList.add('card-text');
    ability.textContent = pokemon.ability;

    const purchaseLink = document.createElement('a');
    purchaseLink.classList.add('btn', 'btn-primary');
    purchaseLink.setAttribute('href', pokemon.purchaseLink);
    purchaseLink.textContent = `Buy ${pokemon.name} card`;

    cardBody.appendChild(pokemonName);
    cardBody.appendChild(heightWeight);
    cardBody.appendChild(move);
    cardBody.appendChild(ability);
    cardBody.appendChild(purchaseLink);

    card.appendChild(cardBody);

    return card;
}