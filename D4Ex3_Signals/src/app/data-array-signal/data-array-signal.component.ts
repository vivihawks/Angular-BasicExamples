import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-data-array-signal',
  standalone: true,
  imports: [],
  template: `
    <button (click)="test()"> Test Array</button>
    Look at the console for the output
  `
})
export class DataArraySignalComponent {

  // Writable signals
  todos = signal([
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Do laundry', completed: true },
    { id: 3, title: 'Walk the dog', completed: false }
  ]); // List of todos

  showCompleted = signal(true); // Flag indicating whether ONLY completed todos should be shown

  // Computed signal to filter and sort todos based on the showCompleted flag
  filteredTodos = computed(() => {
    let filtered = this.todos().filter(todo => this.showCompleted() || !todo.completed);
    return filtered.sort((a, b) => a.id - b.id);
  });

  // Computed signal to count the number of remaining todos
  remainingTodosCount = computed(() =>
    this.todos().reduce((count, todo) => (todo.completed ? count : count + 1), 0)
  );

  constructor() {

    // Effect to log the filtered todos and remaining count whenever they change
    effect(() => {
      console.log('Filtered Todos:');
      console.log(this.filteredTodos());
      console.log(`Remaining Todos: ${this.remainingTodosCount()}`);
    });
  }
  
  test(){
        // Update the values of the writable signals
        this.todos.set([...this.todos(), { id: 4, title: 'Clean the house', completed: false }]);
        //this.todos()[1].completed = false;
    
        // Update the showCompleted flag
      this.showCompleted.set(true);

  }
}
