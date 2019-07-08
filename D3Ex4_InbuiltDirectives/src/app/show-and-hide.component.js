"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ShowAndHideComponent = class ShowAndHideComponent {
    constructor() {
        this.addToDom = true;
        this.hidden = false;
        this.visible = true;
    }
};
ShowAndHideComponent = __decorate([
    core_1.Component({
        selector: 'ng-show-hide-directive',
        template: `
        <h2>Show and Hide Elements</h2>
        <hr/>
        
        <p>
            ngIf condition is {{addToDom ? 'true' : 'false'}}    
            <button (click)="addToDom=!addToDom">set to {{addToDom ? 'false' : 'true'}}</button>
        </p>
        <div #div1>
            <h3 *ngIf="addToDom" >This heading is added to and removed from the DOM</h3>
        </div>
        <p>Children: {{div1.children.length}}, content: '{{div1.children[0]?.innerText}}'</p>
        <hr/>

        <p>
            hidden value is {{hidden ? 'true' : 'false'}}
            <button (click)="hidden=!hidden">set to {{hidden ? 'false' : 'true'}}</button>
        </p>
        <div #div2>
            <h3 [hidden]="hidden">This heading can be hidden but remains in the DOM</h3>
            <h3 [style.display]="hidden ? 'none' : 'block'">and this one too</h3>
        </div>
        <p>Children: {{div2.children.length}}, content: '{{div2.children[0].innerText}}', '{{div2.children[1].innerText}}'</p>
        <hr/>
        
        <p>
            CSS visible value is {{visible}} 
            <button (click)="visible=!visible">set to {{visible ? 'false' : 'true'}}</button>
        </p>
        <div #div3>
            <h3 [style.visibility]="visible ? 'visible' : 'hidden'">
                This heading remains in the DOM but the text is invisible
            </h3>
        </div>
        <p>Children: {{div3.children.length}}, content: '{{div3.children[0].innerText}}'</p>`,
        styles: ["hr{  border:1px dotted yellow;}"]
    })
], ShowAndHideComponent);
exports.ShowAndHideComponent = ShowAndHideComponent;
//# sourceMappingURL=show-and-hide.component.js.map