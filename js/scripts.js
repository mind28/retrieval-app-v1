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

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].size < 1) {
    document.write("<p>" + pokemonList[i].name + " (" + pokemonList[i].size + ")" + "</p>");
  } else {
    document.write("<p>" + pokemonList[i].name + " (" + pokemonList[i].size + ")" + " - Wow that's big" +
      "</p>");
  }

}
