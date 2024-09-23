import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { environment } from 'src/environments/environment';
import { IInfo } from '../entities/info.entity';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  public name: BehaviorSubject<string>;
  

  constructor(private http:HttpClient) { 
    this.name = new BehaviorSubject<string>("");
  }


  getInfo(name:string): Observable<IInfo> {
    const apiUrl = environment.apiurl+'?name='+name;
    return this.http.get<any>(apiUrl, {}).pipe(
      tap((res:IInfo)=>{console.log(res)}),
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    return throwError(() => error);
  }

}



  // https://api.genderize.io/?name=RAM
   // return this.http.get<any>(apiUrl, {}).pipe(
    //   mergeMap((data) => from(data)),
    //   filter((item) => this.filteringRecords(item, filterModel)),
    //   toArray(),
    //   catchError(this.handleError)
    // );
