interface Sprites {
  front_default: string;
}

export interface Pokemon {
  name: string;
}

export interface DetailedPokemon extends Pokemon {
  sprites: Sprites;
}
