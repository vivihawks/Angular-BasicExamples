import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div>
            <h2>Angular In-Built Directives</h2>
            <hr>
            <ng-class-directive></ng-class-directive>
            <br><hr><br>
            <ng-for-directive></ng-for-directive>
            <br><hr><br>
            <ng-if-directive></ng-if-directive>
            <br><br><hr><br>
            <ng-style-directive></ng-style-directive>
            <br><hr><br>
            <ng-switch-directive></ng-switch-directive>
            <br><hr><br>
            <ng-show-hide-directive></ng-show-hide-directive>
            <br><hr><br>
        </div>`,
    styles:['hr{border: 2px solid red}']
})
export class AppComponent {}