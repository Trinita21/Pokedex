const outerdiv = document.getElementById("PokeId");

function printData(pokemon) {
  const cardEL = document.createElement("div");
  cardEL.classList.add("card-element");

  const cardImgEL = document.createElement("img");
  cardImgEL.src = pokemon.sprites.front_default;
  cardEL.appendChild(cardImgEL);

  const cardDetails = document.createElement("div");
  cardDetails.classList.add("card-details");

  const cardName = document.createElement("p");
  cardName.innerText = "Name:" + " " + pokemon.name;
  cardDetails.appendChild(cardName);

  const height = document.createElement("p");
  height.innerText = "Height:" + " " + pokemon.height;
  cardDetails.appendChild(height);

  const weight = document.createElement("p");
  weight.innerText = "Weight:" + " " + pokemon.weight;
  cardDetails.appendChild(weight);

  const abilityContent = document.createElement("div");
  abilityContent.classList.add("ability-content");

  const ability = document.createElement("p");
  ability.innerText = "Ability:";
  abilityContent.appendChild(ability);

  pokemon.abilities.forEach((ability) => {
    const pokeability = document.createElement("p");
    pokeability.innerText = ability.ability.name;
    abilityContent.appendChild(pokeability);
  });
  cardDetails.appendChild(abilityContent);

  const typeContent = document.createElement("div");
  typeContent.classList.add("type-content");

  const ty = document.createElement("p");
  ty.innerText = "Type:";
  typeContent.appendChild(ty);

  pokemon.types.forEach((type) => {
    const poketype = document.createElement("p");
    poketype.innerText = type.type.name;
    typeContent.appendChild(poketype);
  });
  cardDetails.appendChild(typeContent);

  cardEL.appendChild(cardDetails);
  outerdiv.appendChild(cardEL);
}

function getPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      //   document.getElementById("PokeId").innerText = data.name;
      printData(data);
    });
}
function pokeloop(n) {
  for (let i = 1; i <= n; i++) {
    getPokemon(i);
  }
}
pokeloop(50); //total 898 pokemons
