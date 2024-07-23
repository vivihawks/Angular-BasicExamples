import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'host',
    template: `
        <h1>Directive I/O</h1>
                {{''//******** "bind-" prefix is not mandatory. Explore the difference in behavior with and without bind- prefix below **********}}
        <h3 [attributeDirective]="sharedObject.name"
            [param]="sharedObject" 
            param1="'Param1'"
            bind-param2="'Param2'"
            bind-param-3="'Param3'"
            (event)="directiveOutput = $event">
            {{directiveOutput}}
        </h3>

        <p style="color:red; cursor:pointer;font-weight:bold;color:purple;font-size:15pt;" (myClicker)="clickerContent=$event">{{clickerContent}}</p>`
})
export class HostComponent implements OnInit{

     directiveOutput = 'Initial Directive Content';
     clickerContent = 'ClickMe As Well!';

     sharedObject = {
        id: 123,
        name: 'one-two-three'
    };

    ngOnInit(): void {
        setInterval(()=>this.sharedObject.name+="%",1000);
    }
}