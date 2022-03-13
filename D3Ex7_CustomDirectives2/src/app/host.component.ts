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

     elementContent = 'click me';
     clickerContent = 'click me as well';

     sharedObject = {
        id: 123,
        name: 'one-two-three'
    };

}