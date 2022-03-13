import { Component } from "@angular/core";

@Component({
    selector: 'app',
    template: `
        <host *ngIf="showSection('attribute')"></host>`
})
export class AppComponent {

<<<<<<< HEAD
    private showSection(name: string): boolean {
=======
     showSection(name: string): boolean {
>>>>>>> c2747ff (Angular 12 Upgrade)
        if (!window.location.search) {
            return true;
        }
        const PARAM = window.location.search.substr(1);
        return PARAM === name;
    }
}