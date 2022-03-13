  import { Component } from '@angular/core';

@Component({

  selector: 'app-root',
  template: `
  
  <ng-container *ngTemplateOutlet="myTemplate">
  </ng-container>
  
  <!-- Swap ng-container vs div below to see the difference in behavior and what is rendered-->
    <div *ngFor="let item of [1,2,3,4,5,6]">
      <app-card *appDelay="1000*item"><!--Container-->
        {{item}}<!--Template-->
      </app-card>
    </div>
  
    
	<ng-container *ngTemplateOutlet="myTemplate">
  </ng-container>
  
	<!-- Reusable Template-->
	<ng-template #myTemplate>
		Our Company Logo
	</ng-template>
  `,
  styles: [`
  app-car {
    padding: 2rem;
    font-size: 2rem;
    font-family: 'Helvetica', sans-serif;
    font-weight: 300;
    color:white;
    background:gold;
    margin: 1rem;
    display: inline-block;
  }`]
})

//1000, 2000, 3000, 4000....
export class AppComponent {
}