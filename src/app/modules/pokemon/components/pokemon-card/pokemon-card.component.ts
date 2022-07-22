import { DetailedPokemon } from './../../../../types/pokemon.d'
import { PokemonService } from '../../../../services/pokemon.service'
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: [ './pokemon-card.component.scss' ],
})
export class PokemonCardComponent implements OnInit {
  @Input() name: string = ''

  pokemon: DetailedPokemon = {
    name: this.name,
    sprites: {
      front_default: ''
    }
  }

  constructor (private readonly pokemonService: PokemonService) {}

  ngOnInit (): void {
    this.pokemonService.getPokemonByName(this.name).subscribe(pokemon => (this.pokemon = pokemon))
  }
}
