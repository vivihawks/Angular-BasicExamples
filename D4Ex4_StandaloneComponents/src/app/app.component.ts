import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[CommonModule,RouterModule],//Other Standalone Component(s) ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// @NgModule({
//   declarations:[], //Components that are NOT StandAlone
//   imports:[],// Modules and STANDALONE components
//   providers: []//Services
// })
export class AppComponent {
  title = 'standalone-demo';
}
