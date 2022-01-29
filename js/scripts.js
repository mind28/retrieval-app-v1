let pokemonList = [{
    name: 'Bulbasaur',
    hiegth: 0.7,
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
    hiegth: 0.6,
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
    hiegth: 1.1,
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


let text = "";
let item = 0;

while (pokemonList[item]){
  text = text + " " + pokemonList[item];
  item++;
}
document.write(text);
console.log(pokemonList);
