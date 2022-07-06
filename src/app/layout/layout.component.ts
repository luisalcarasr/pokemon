import {PokemonService} from '../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../types/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  title = 'pokemon';
  constructor(private pokemonService: PokemonService) {}
}
