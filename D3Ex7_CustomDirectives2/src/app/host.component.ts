import { Component } from "@angular/core";

@Component({
    selector: 'host',
    template: `
        <h1>Directive Binding</h1>
        <h3 myDirective="one time init"
            [param]="sharedObject" 
            bind-another="'another param'"
            (event)="elementContent = $event">
            {{elementContent}}
        </h3>
        <p (myClicker)="clickerContent=$event">{{clickerContent}}</p>`
})
export class HostComponent {

<<<<<<< HEAD
    private elementContent = 'click me';
    private clickerContent = 'click me as well';

    private sharedObject = {
=======
     elementContent = 'click me';
     clickerContent = 'click me as well';

     sharedObject = {
>>>>>>> c2747ff (Angular 12 Upgrade)
        id: 123,
        name: 'one-two-three'
    };

}