import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-basic-signal',
  standalone: true,
  imports: [CommonModule],
  template: `
   <ul>
      <li *ngFor="let item of itemList(); let i=index">
        {{item.name}} - {{item.price}}
        <button (click)="removeItem(item)">Remove</button>
      </li>
    </ul>
    Total Price: {{totalPrice()}}
  `
})
export class BasicSignalComponent {
  items = [    { name: 'Product A', price: 10 },    { name: 'Product B', price: 15 },    { name: 'Product C', price: 20 },  ];
  
  // Define a signal for the list of items
  itemList = signal(this.items);
  
  // Define a computed value for the total price
  totalPrice = computed(() => {
    return this.itemList().reduce((acc, curr) => acc + curr.price, 0);
  });
  
  removeItem(item:{name:string, price: number}) {
    // Update the itemList signal by removing the selected item
    this.itemList.set(this.itemList().filter((i) => i !== item))
  }
}
