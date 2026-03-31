import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlindspotService {
 private baseUrl = 'https://api.tvmaze.com/shows';
  constructor(private http: HttpClient) {}
getCharacterById(id: number): Observable<Character> {
  return this.http.get<Character>(`${this.baseUrl}/${id}`);
}
geters(id: number, ref: String): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/${id}/${ref}`);
}
}
