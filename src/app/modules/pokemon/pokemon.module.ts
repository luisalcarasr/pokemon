import { PokemonRoutingModule } from './pokemon.routing'
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component'
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component'
import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonCardComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatCardModule,
    MatGridListModule,
  ],
})
export class PokemonModule {}
