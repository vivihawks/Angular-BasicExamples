import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart-signal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
      <h2>Grocery List:</h2>
      <ul>
      @for(item of itemList(); track item.name){
        <li>
        {{item.name}} - {{item.quantity}} - Last edited by: {{item.lastEditedBy}}
        <button (click)="removeItem(item)">Remove</button>
        </li>
        }
      </ul>
      <h3>Add Item:</h3>
      <form (submit)="addItem()">
        <input type="text" name="itemName" [(ngModel)]="newItemName" placeholder="Name">
        <input type="number" name="quantity" [(ngModel)]="newItemQuantity" placeholder="Quantity">
        <button type="submit" >Add</button>
      </form>
      `
})
export class ShoppingCartSignalComponent {
  items = [{ name: 'Apples', quantity: 5, lastEditedBy: 'Unknown' }, { name: 'Bananas', quantity: 3, lastEditedBy: 'Unknown' }, { name: 'Milk', quantity: 1, lastEditedBy: 'Unknown' },];
  newItemName = '';
  newItemQuantity = 0;
  // Define a signal for the list of items
  itemList = signal(this.items);

  // Define a signal for the current user's name
  currentUser = signal('Vignesh');

  addItem() {
    // Add a new item to the itemList signal with the current user's name as the last edited by value
    this.itemList.set([...this.itemList(), { name: this.newItemName, quantity: this.newItemQuantity, lastEditedBy: this.currentUser() }]);

    // Clear the input fields
    this.newItemName = '';
    this.newItemQuantity = 0;
  }

  removeItem(item:any) {
    // Remove the selected item from the itemList signal
    this.itemList.set(this.itemList().filter((i) => i !== item));
  }
}
