import { Component } from '@angular/core';

@Component({
    selector: 'ng-for-directive',
    template: `
        <h2>ngFor</h2>

        <!--
        <ng-template [ngFor]...
            <div...
        -->
        <div *ngFor="let person of people; let isOdd=odd">
            <span [class.highlight]="isOdd">{{person.name.firstname}} {{person.name.lastname}}</span>
        </div>
        
        <h3>For Loop</h3>
        
        <span *ngFor="let item of forLoopArray(15); let i=index; let last=last">
            <span>{{i+1}}{{last ? '' : ','}}</span>
        </span>
        <hr>
        <h2>In-built Control Flow - For</h2>
        @for(person of people; track person){
            <span [class.highlight]="$odd">{{$last}} {{$index+1}} {{person.name.firstname}} {{person.name.lastname}} </span><br>
        } @empty{
         <span>No persons found</span>
        }
        `,
    styles: ['.highlight {background-color: yellow }']
})
export class NgForComponent {
     people = [
            {id: 1, name: {firstname: 'John', lastname: 'Doe'}},
            {id: 2, name: {firstname: 'John', lastname: 'Smith'}},
            {id: 3, name: {firstname: 'Peter', lastname: 'Scott'}},
            {id: 4, name: {firstname: 'Sue', lastname: 'Reece'}}
        ];

     trackByPeople(index: number, person: any) {
        return person.id;
    }
     forLoopArray(elements: number): Array<any> {
        return new Array(elements);
    }
}