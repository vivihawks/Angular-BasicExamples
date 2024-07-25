import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError,firstValueFrom , tap} from 'rxjs';
import { catchError } from 'rxjs/operators';
const HEADER = { headers: new HttpHeaders({ 'Authentication': 'AFDSSASDF123512' }) };

export interface Item {
  name: string; description: string;
}

@Injectable()
export class MyService {
  constructor(private http: HttpClient) {}

  getItems() {
    return firstValueFrom(this.http.get('http://localhost:4200/items.json', HEADER).pipe(
      catchError(this.handleError),
      tap(data=> console.log(`############${data}`))
    ));
	  
	  //Observable > Subscribe(progress, error, complete)
	  //Promise > then(success, failure).then(success, failure).then(success,failure)
  }
  
  private handleError(error: Response){
    console.error(error);
    return throwError(()=>error.json()|| ' Server Error ');
  }
}
