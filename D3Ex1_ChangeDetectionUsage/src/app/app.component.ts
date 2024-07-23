import { ApplicationRef, Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Actor } from './actor.model';
import { TitleStrategy } from '@angular/router';
import { MovieComponent } from './movie.component';

@Component({
  selector: 'app',
  template: `
    <h1>MovieApp</h1>
    <p>{{ slogan }}</p>
    <button type="button" (click)="changeActorProperties()">
      Change Actor Properties
    </button>
    <button type="button" (click)="changeActorObject()">
      Change Actor Object
    </button>
<br>
<br>

<div style="margin:5px; font-family:verdana">The name of the Actor in the App Component is {{actor.firstName }}, {{actor.lastName}}</div>
<app-movie #childComp [title]="title" [actor]="actor"></app-movie>
<br>
<br>

<h4>Use this button to trigger Change Detection, when Zone.js is disabled</h4>
<button type="button" (click)="appRef.tick()">    Trigger CD   </button>
<br>
<br>
<h4>Try the below operations in ChangeDetectionStrategy - onPush</h4>
<button type="button" (click)="childComp.cdr.detectChanges()">    Detect Changes    </button>
<button type="button" (click)="childComp.cdr.markForCheck()">    Mark for Check    </button>
<br>
<br>
<h4>Try the below operations in ChangeDetectionStrategy - Default</h4>
<button type="button" (click)="childComp.cdr.detach()">    Detach ChangeDetector    </button>
<button type="button" (click)="childComp.cdr.reattach()">    Re-attach ChangeDetector    </button>
`
})

/**
 * Change Detection Concepts to explore
 * 1. Understand Default Change Detection Strategy (Refer MovieComponent class)
 *    a. Understand the purpose of detach()
 *    b. Understand the purpose of attach()
 * 
 * 2. Understand OnPush Change Detection Strategy (Refer MovieComponent class)
 *    a. Understand the purpose of detectChanges()
 *    b. Understand the purpose of markForCheck()
 *    c. Understand the difference between detectChanges and markForCheck() -- Refer main.ts
 * 3. Explore Detach and Reattach Change Detector
 */
export class AppComponent {
  slogan = 'Just movie information';
  title = 'Terminator 1';
  actor = new Actor('Arnold', 'Schwarzenegger');
  randomNumber2 = 1;
  randomNumber = 1;

  @ViewChild("childComp")
  childComp!: MovieComponent;
  constructor(protected appRef: ApplicationRef, zone: NgZone ) {
    zone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log(`Logging from Outside Angular Zone; current time is ${Date.now()}. This will NOT trigger Change Detection`)
        this.actor.firstName = 'Nicholas' + this.randomNumber--;    
      }, 5000);
      });
      setTimeout(() => {
        console.log(`Logging from Inside Angular Zone; current time is ${Date.now()}. This will  trigger Change Detection`)
        this.actor.firstName = 'Nicholas' + this.randomNumber--;
      }, 10000);

 
   }

  changeActorProperties(): void {
    //this.title = `Terminator ` + this.randomNumber--;
    this.actor.firstName = 'Nicholas' + this.randomNumber--;
    this.actor.lastName = 'Cage';
  }

  changeActorObject(): void {
    this.title = `Terminator ` + this.randomNumber2++;
    this.actor = new Actor('Bruce', 'Willis');
  }
  ngDoCheck() {
    console.log("Parent DoCheck called");
  }

  ngOnChanges() {
    console.log("Parent OnChanges called");
  }

}