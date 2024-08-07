import { Component } from '@angular/core';
import {
	FormControl,
	FormGroup,
	FormBuilder
} from '@angular/forms';
import { SearchService } from './services/search.service';


import { debounceTime, flatMap, mergeMap, retry } from 'rxjs/operators';
import * as Rx from 'rxjs';

import { from, of } from "rxjs";
import { map, catchError, delay, timeout, switchMap } from 'rxjs/operators';


@Component({
	selector: 'app',
	template: `
		<form [formGroup]="coolForm"><input formControlName="search" #term placeholder="Search Countries by Cap Cities"></form>
		<ul *ngIf="result"> 
		<h3>Cities that contain <u>{{term.value}}</u> in the name</h3>
		<li *ngFor="let item of result">
		  {{item['name']}}
		</li>
		</ul>
	`,
	styles: [`
		:host{
			font-family:Verdana;
		}
	`]
})

export class AppComponent {
	searchField: FormControl;
	coolForm: FormGroup;
	result: any;

	constructor(private searchService: SearchService, private fb: FormBuilder) {
		this.searchField = new FormControl();
		this.coolForm = fb.group({ search: this.searchField });

		this.searchField.valueChanges.pipe(
			debounceTime(500)
			//Toggle one of flat or switch map below
			// , switchMap(term => this.searchService.search(term))
			,mergeMap(term => this.searchService.search(term))
			,retry()
		)
			.subscribe(result => {
				//this.result = result.artists.items
				this.result = result
				console.log(result)
			});
	}
}
