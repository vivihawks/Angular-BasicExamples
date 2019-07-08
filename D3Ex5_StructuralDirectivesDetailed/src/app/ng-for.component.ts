import { Component } from '@angular/core';

@Component({
    selector: 'ng-for-template',
    template: `
        <h1>ngFor with template</h1>

     
        <h3>with <code>&lt;template&gt;</code> element</h3>  
        <ng-template ngFor let-person let-isOdd="odd" let-i="index" [ngForOf]="people" [ngForTrackBy]="trackByPeople">
            <div>
                <span [class.highlight]="isOdd">{{i}}. {{person.name.forename}} {{person.name.surname}}</span>
            </div>
        </ng-template>`,
    styles: ['.highlight {background-color: Lavender }']
})
export class NgForComponent {

    private people = [
        {id: 1, name: {forename: 'John', surname: 'Doe'}},
        {id: 2, name: {forename: 'John', surname: 'Smith'}},
        {id: 3, name: {forename: 'Peter', surname: 'Scott'}},
        {id: 4, name: {forename: 'Sue', surname: 'Reece'}}
    ];

    trackByPeople(index: number, person: any) {
        return person.id;
    }
}