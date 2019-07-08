import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MyService, Item } from './services/my.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app',
  template: `
    <div  flex layout>
      <ul>
        <h3 >Items</h3>
        <li  *ngFor="let item of items">
          <div>
            <h3>{{item.name}}</h3>
            <p>{{item.description}}</p>
          </div>
        </li>
      </ul>
    </div>
  `,
  providers: [ MyService ]
})

export class App implements OnInit {
  items: Observable<Array<Item>>;

  constructor(private service: MyService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
//    this.service.getItems()
//      .subscribe(data => {
//        this.items = data;
//        this.cd.detectChanges();
//      });


//then(successCallback(){}, failureCallback(){})
    this.service.getItems()
      .then(
          (result) => {
            this.items = result;
            return "Output from First Then";
         }, 
          (error) => {
            alert(error)
            alert("Something went wrong!")
            throw new Error("Something went wrong");
          }
      )
      .then((result) =>{
        alert("This is the second link in the chain, got this param " + result)
        return "Link 1"
      })
      .then((result) =>{
        alert("And this one's the third, got this param " + result)
        return "Link 2"
      })
      .catch((error) =>{
        alert("This is an error handler")
      });

  }
}
