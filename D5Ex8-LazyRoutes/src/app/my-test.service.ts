import { Injectable } from '@angular/core';

@Injectable({
  
// Provider Scopes
//~~~~~~~~~~~~~~~~
// root     : Provide this service at the root module level
// platform : Used when multiple Angular apps co-exist in a single page. This scope ensures singleton nature of the service across all the Angular apps in that page
// any      : One common instance for all eagerly loaded modules and one instance each for every lazy loaded module

//Change the below to root | any to see the difference in behavior in the UI
// providedIn: 'any'
providedIn: 'root'
// providedIn: 'platform'
})
export class MyTestService {
  private counter:number=0;
  constructor() { }
  increment():void{
    console.log(`MyTestService ${this.counter++}`);
  }
  getCounter():number{
    return this.counter;
  }
}
