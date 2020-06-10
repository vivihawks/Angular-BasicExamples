import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx'
const HEADER = { headers: new HttpHeaders({ 'Authentication': 'AFDSSASDF123512' }) };

export interface Item {
  name: string; description: string;
}

@Injectable()
export class MyService {
  constructor(private http: HttpClient) {}

  getItems() :Promise<any>{
    return this.http.get('http://localhost:4200/data/items.json', HEADER)
      //.map(res => res)
      .catch(this.handleError)
      .toPromise();
	  
	  //Observable > Subscribe(progress, error, complete)
	  //Promise > then(success, failure).then(success, failure).then(success,failure)
  }
  
  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error|| ' Server Error ');
  }
}
