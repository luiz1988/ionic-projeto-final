import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CachorroService {

  URL = 'https://swapi.co/api/';
  chaveAPI = '7e6e65ed';

  constructor(private http: HttpClient) { }

  //Chamada sincrona
  consultaFilmes(titulo: string) {
    this.http.get<any>(`
      ${this.URL}?s=${encodeURI(titulo)}&apikey=${this.chaveAPI}
    `).subscribe(
      dados => {
        console.log(dados);
        console.log(`${this.URL}?s=${encodeURI(titulo)}&apikey=${this.chaveAPI}`);
      }
    );
  }

  //Chamada assincrona
  consultaFilmesAssincrono(titulo: string): Observable<any> {
    debugger
    return this.http.get<any>(`
        ${this.URL}${encodeURI(titulo)}`)
  }

  getFilmesById(id) {
    debugger
    const urlStarWars = "https://swapi.co/api/species/"
    const novoId = id.replace(/\D/g,'')
    return this.http.get(`${urlStarWars}${novoId}`);
  }

}
