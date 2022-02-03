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

  return {
    add: add,
    getAll: getAll
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({
  name: 'Pikachu',
  size: 0.4
});
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.size < 1) {
    document.write("<p>" + pokemon.name + ' ( ' + pokemon.size + ' )' + "</p>");
  } else {
    document.write("<p>" + pokemon.name + ' ( ' + pokemon.size + ' )' + " WOW that's big" + "</p>");
  }

});
