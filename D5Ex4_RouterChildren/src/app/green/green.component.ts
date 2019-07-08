import { Component } from '@angular/core';

@Component({
    template:  `
        <div class="very-pale-green padded">
            <h2>Green</h2>
            <p>
                Child menu -
                <a routerLink="light"  routerLinkActive="disabled">Light Green</a> |
                <a routerLink="medium" routerLinkActive="disabled">Medium Green</a> |
                <a routerLink="dark"   routerLinkActive="disabled">Dark Green</a>
            </p>
            <div class="border not-padded">
                <router-outlet></router-outlet>
            </div>
        </div>`,
    styles: ['.very-pale-green {background-color: #e6ffe6;}']
})
export class GreenComponent {
}