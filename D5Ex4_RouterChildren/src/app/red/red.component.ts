import { Component } from '@angular/core';

@Component({
    template:  `
        <div class="very-pale-red padded">
            <h2>Red</h2>
            <p>
                Child menu -
                <a routerLink="light"  routerLinkActive="disabled">Light Red</a> |
                <a routerLink="medium" routerLinkActive="disabled">Medium Red</a> |
                <a routerLink="dark"   routerLinkActive="disabled">Dark Red</a>
            </p>
            <div class="border not-padded">
                <router-outlet></router-outlet>
            </div>
        </div>`,
    styles: ['.very-pale-red {background-color: #ffe6e6;}']
})
export class RedComponent {
}


//Router - App Component
    //Red - Red Component
        //Light
        //Medium
        //Dark

        //Router Outlet
    //Green
        //Light
        //Medium
        //Dark

        //Router Outlet
    //Blue
         //Light
        //Medium
        //Dark

        //Router Outlet


    //Router Outlet