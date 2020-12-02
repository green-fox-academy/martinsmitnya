import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?
// Implement the following `chooseEffective` function which will choose the most effective pokemon for Ash

function chooseEffective (myPokemon, enemyPokemon: Pokemon) {
  for (let i = 0; i<myPokemon.length; i++){            //In a for loop I go through all available pokemons
    if (enemyPokemon.type === myPokemon[i].effectiveAgainst) {    
      return pokemonOfAsh[i].name;  //If the myPoekmin[i].effectiveAgainst is what the enemy.type is I choose it
    }

  }
  

}




console.log(`I choose you!, ${chooseEffective(pokemonOfAsh, wildPokemon)}`);


function initializePokemon(): Pokemon[] {
  return [
    new Pokemon('Balbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'leaf'),
    new Pokemon('Balbasaur', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire')
  ];
}

