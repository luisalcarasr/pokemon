import {DetailedPokemon} from './../types/pokemon.d';
import { environment } from './../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from "../types/pokemon";
import { PaginatedResponse } from '../types/response';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  getPokemonByName(name: string) {
    return this.http.get<DetailedPokemon>(environment.api_url + '/pokemon/' + name);
  }
  constructor(private http: HttpClient) {}

  getAllPokemon(): Observable<PaginatedResponse<Pokemon>> {
    return this.http.get<PaginatedResponse<Pokemon>>(environment.api_url + '/pokemon');
  }

  getPokemonById(id: number) {
    return this.http.get<DetailedPokemon>(environment.api_url + '/pokemon/' + id);
  }

}
