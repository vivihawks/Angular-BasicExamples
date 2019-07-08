import { HttpClient,HttpHeaders,HttpClientModule  } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOptions = new HttpHeaders();
@Injectable()
export class SearchService {
  
  
  constructor(private http: HttpClient) {

  }
  search(term: string) { 
	httpOptions.set("Access-Control-Allow-Origin","*");

	httpOptions.set('Access-Control-Allow-Methods', 'GET');
   
  //return this.http.get('https://api.spotify.com/v1/search?q=' + term + '&type=artist')
    return this.http.jsonp('http://services.groupkt.com/state/search/USA' ,'callback' )

      //.subscribe(response => {console.log(response)});
  }
}

