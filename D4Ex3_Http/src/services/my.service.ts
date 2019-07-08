import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx'
const HEADER = { headers: new Headers({ 'Authentication': 'AFDSSASDF123512' }) };

export interface Item {
  name: string; description: string;
}

@Injectable()
export class MyService {
  constructor(private http: Http) {}

  getItems() {
    return this.http.get('http://localhost:3000/items', HEADER)
      .map(res => res.json())
      .catch(this.handleError)
      .toPromise();
  }
  
  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json()|| ' Server Error ');
  }
}
