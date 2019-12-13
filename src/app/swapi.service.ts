import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { 
  merge
  , race,
  empty
 } from 'rxjs';

 import { expand } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) { }

  getPlanets() {
    // const o1 = this.httpSvc.get('https://swapi.co/api/planets/');
    // return o1;
    // const o2 = this.httpSvc.get('https://swapi.co/api/planets/?page=2');
    // const o3 = this.httpSvc.get('https://swapi.co/api/planets/?page=3');
    // const o4 = this.httpSvc.get('https://swapi.co/api/planets/?page=4');
    // const o5 = this.httpSvc.get('https://swapi.co/api/planets/?page=5');
    // const o6 = this.httpSvc.get('https://swapi.co/api/planets/?page=6');
    // const o7 = this.httpSvc.get('https://swapi.co/api/planets/?page=7');

    // return race(o1, o2, o3, o4, o5, o6, o7);
    // return merge(o1, o2, o3, o4, o5, o6, o7);

    // Recursive rxjs - make code more flexible - only need to change last part of url
    return this.httpSvc.get('https://swapi.co/api/planets/').pipe(
      expand(
        data => (<any> data).next // if there is more data
          ? this.httpSvc.get((<any> data).next) // call it again
          : empty() // no data, return empty observable
      )
    );

  }
}
