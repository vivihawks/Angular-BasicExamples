import { Component } from '@angular/core';
import { FormControl, 
	FormGroup, 
	FormBuilder } from '@angular/forms'; 
import { SearchService } from './services/search.service';
import 'rxjs/Rx';

@Component({
	selector: 'app',
	template: `
		<form [formGroup]="coolForm"><input formControlName="search" placeholder="Search the States of the USA"></form>
		
		<div *ngFor="let state of result">
		  {{state.name}}, {{state.country}}
		</div>
	`
})

export class AppComponent {
	searchField: FormControl;
	coolForm: FormGroup;
	result: any;
	
	constructor(private searchService:SearchService, private fb:FormBuilder) {
		this.searchField = new FormControl();
		this.coolForm = fb.group({search: this.searchField});
		
		this.searchField.valueChanges
		  .debounceTime(400)
			//Toggle one of flat or switch map below
			//.switchMap(term => this.searchService.search(term))
			.flatMap(term => this.searchService.search(term))
			.subscribe(result => {
				//this.result = result.artists.items
				this.result =result
				console.log(result)
			});
	}
}
