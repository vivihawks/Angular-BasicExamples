import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { signal, computed, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-reactive-prgm-signal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <label> First Name </label>
       <input [(ngModel)]="firstName">
      <label> Last Name </label>
       <input [(ngModel)]="lastName">
      <label> Age </label>
       <input [(ngModel)]="age">
       Look at the console for output
    </div>
  `
})
export class ReactivePrgmSignalComponent {


  // Writable signals
   firstName = signal('Vignesh');
   lastName = signal('Natarajan');
   age = signal(30);

  // Computed signal to calculate the full name
   fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  // Computed signal to determine if the person is an adult
   isAdult = computed(() => this.age() >= 18);

  constructor() {
    // Effect to log the full name and adult status whenever any of the signals change
    effect(() => {
      console.log(`Full Name: ${this.fullName()}`);
      console.log(`Is Adult: ${this.isAdult()}`);
    });
  }
}
