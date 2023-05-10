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
	httpOptions.set('Access-Control-Allow-Methods', 'JSONP');
   
  //return this.http.get('https://api.spotify.com/v1/search?q=' + term + '&type=artist')
  //return this.http.jsonp('http://services.groupkt.com/state/get/USA' ,'callback' )
   // return this.http.jsonp(`http://api.zippopotam.us/us/${term}` ,'callback' )
//return this.http.get(`https://indian-cities-api-nocbegfhqg.now.sh/cities?City_like=${term}` )
return this.http.get(`https://restcountries.com/v2/capital/${term}` )
      //.subscribe(response => {console.log(response)});
  }
}

