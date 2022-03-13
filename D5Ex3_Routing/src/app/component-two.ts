import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'component-two',
  template: 'Component Two with route param <b><code>ID: {{ id }}</code></b>'
})
export default class ComponentTwo {

<<<<<<< HEAD
  private id:number;
=======
   id:number;
>>>>>>> c2747ff (Angular 12 Upgrade)
  private sub: any;
  constructor(private route: ActivatedRoute) {}

  private ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
}