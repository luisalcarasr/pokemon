import { PokemonRoutingModule } from './pokemon.routing';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatCardModule,
    MatGridListModule,
  ],
})
export class PokemonModule {}
