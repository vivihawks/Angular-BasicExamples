import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <ng-if-template *ngIf="showSection('ng-if-template')"></ng-if-template>
        <ng-switch-template *ngIf="showSection('ng-switch-template')"></ng-switch-template>
        <ng-for-template *ngIf="showSection('ng-for-template')"></ng-for-template>`,
})
export class AppComponent {

    private showSection(name: string): boolean {
        if (!window.location.search) {
            console.log(window.location.search)
            return true;
        }
        const PARAM = window.location.search.substr(1);
        return PARAM === name;
    }
}