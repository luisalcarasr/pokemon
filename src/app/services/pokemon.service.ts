import { DetailedPokemon } from './../types/pokemon.d'
import { environment } from './../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Pokemon } from '../types/pokemon'
import { PaginatedResponse } from '../types/response'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor (private readonly http: HttpClient) {}

  getPokemonByName (name: string): Observable<DetailedPokemon> {
    return this.http.get<DetailedPokemon>(`${environment.api_url}/pokemon/${name}`)
  }

  getAllPokemon (): Observable<PaginatedResponse<Pokemon>> {
    return this.http.get<PaginatedResponse<Pokemon>>(`${environment.api_url}/pokemon`)
  }

  getPokemonById (id: number): Observable<DetailedPokemon> {
    return this.http.get<DetailedPokemon>(`${environment.api_url}/pokemon/${id}`)
  }
}
