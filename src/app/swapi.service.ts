import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) { }

  getPlanets() {
    const o1 = this.httpSvc.get('https://swapi.co/api/planets/');
    return o1;
  }
}
