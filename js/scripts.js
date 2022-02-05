// IIFE repo------------------------------------

let pokemonRepository = (function() {
  let pokemonList = [{
      name: 'Bulbasaur',
      size: 0.7,
      weight: 6.9,
      eggGroups: [
        'Monster',
        'Grass'
      ],
      abilites: [
        'Chlorophyll',
        'Overgrow'
      ]
    },
    {
      name: 'Charmander',
      size: 0.6,
      weight: 8.5,
      eggGroups: [
        'Monster',
        'Dragon'
      ],
      abilites: [
        'Blaze',
        'Solar-power'
      ]
    },
    {
      name: 'Butterfree',
      size: 1.1,
      weight: 32,
      eggGroups: [
        'Bug',
      ],
      abilites: [
        'Compoundeyes',
        'Tinted-lens'
      ]
    }
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    button.classList.add("box-shadow");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(event) {
      showDetails(pokemon)
    })
  }

  function showDetails(item) {
    console.log(item);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();




pokemonRepository.add({
  name: 'Pikachu',
  size: 0.4
});
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
