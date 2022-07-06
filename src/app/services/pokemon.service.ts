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
  constructor(private http: HttpClient) {}

  getAllPokemon(): Observable<PaginatedResponse<Pokemon>> {
    return this.http.get<PaginatedResponse<Pokemon>>(environment.api_url + '/pokemon');
  }
}
