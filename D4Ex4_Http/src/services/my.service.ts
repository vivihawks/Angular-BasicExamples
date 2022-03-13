import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx'
=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Rx from 'rxjs';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
>>>>>>> c2747ff (Angular 12 Upgrade)
const HEADER = { headers: new HttpHeaders({ 'Authentication': 'AFDSSASDF123512' }) };

export interface Item {
  name: string; description: string;
}

@Injectable()
export class MyService {
  constructor(private http: HttpClient) {}

  getItems() {
<<<<<<< HEAD
    return this.http.get('http://localhost:4200/data/items.json', HEADER)
      .catch(this.handleError)
      .toPromise();
=======
    return this.http.get('http://localhost:4200/data/items.json', HEADER).pipe(
      catchError(this.handleError)
    ).toPromise();
>>>>>>> c2747ff (Angular 12 Upgrade)
	  
	  //Observable > Subscribe(progress, error, complete)
	  //Promise > then(success, failure).then(success, failure).then(success,failure)
  }
  
  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json()|| ' Server Error ');
  }
}
