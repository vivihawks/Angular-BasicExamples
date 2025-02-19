import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-loader-signal',
  standalone: true,
  imports: [CommonModule],
  template:`
      <div *ngIf="isLoading()">
      Loading...
    </div>
    <table *ngIf="!isLoading()">
      <thead>This is the table head</thead>
      <tbody>This is the table body</tbody>
    </table>

  `
})
export class LoaderSignalComponent {


  // Define a signal for the loading state
  loading = signal(true);
  
  ngOnInit() {
    // Fetch the data from the API
    fetchData().subscribe((data) => {
      // Update the loading signal to hide the spinner
      this.loading.set(false);
      
      // Render the data in the table
    });
  }
  
  isLoading() {
    return this.loading();
  }
}

function fetchData() {
  return of(1).pipe( 
    delay(5000)
   );
}
