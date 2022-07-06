import {Pokemon} from './../../../../types';
import {PokemonService} from './../../../../services/pokemon.service';
import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe(response => this.pokemon = response.results);
  }
}
