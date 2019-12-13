import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) { }

  getPlanets() {
    const o1 = this.httpSvc.get('https://swapi.co/api/planets/');
    // return o1;
    const o2 = this.httpSvc.get('https://swapi.co/api/planets/?page=2');
    const o3 = this.httpSvc.get('https://swapi.co/api/planets/?page=3');
    const o4 = this.httpSvc.get('https://swapi.co/api/planets/?page=4');
    const o5 = this.httpSvc.get('https://swapi.co/api/planets/?page=5');
    const o6 = this.httpSvc.get('https://swapi.co/api/planets/?page=6');
    const o7 = this.httpSvc.get('https://swapi.co/api/planets/?page=7');


    return merge(o1, o2, o3, o4, o5, o6, o7);

  }
}
