import { Component } from '@angular/core';
import { FlowerService } from './flower.service';
import { AnimalService } from './animal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
 
  // ****** When using the Provider search decorators in the child component like 
  // @Host(), @Self(), SkipSelf() etc., for the AnimalService, 
  // enable the following viewProviders 
  //   ,viewProviders: [{ provide: AnimalService, useValue: { emoji: '🦔' } }]
})
export class AppComponent  {
  constructor(public flower: FlowerService, public animal: AnimalService) {}
}


