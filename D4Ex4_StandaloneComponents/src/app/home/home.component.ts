import { Component, NgModule, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InfoService } from '../services/info.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info: FormGroup;
  showInfo = false; 
  @ViewChild('loadinfo',{read:ViewContainerRef}) ivcr? : ViewContainerRef;  

  constructor(private infoservice : InfoService, private router : Router) {
    this.info = new FormGroup({
      name:new FormControl("",[Validators.required])
    })
   }

  ngOnInit(): void {
  }

  fetchInfo(): void{
    if(this.info.valid == true){
      this.infoservice.name.next(this.info.value.name);
      this.router.navigate(['info']);
    }
  }

  async loadInfo(){

    this.infoservice.name.next(this.info.value.name);
    this.showInfo = true; 
    // this.ivcr?.clear();
    const {InfoComponent} = await import('../info/info.component');
    let c = this.ivcr?.createComponent(InfoComponent);
    c?.instance.reset$.subscribe(
      (data:boolean)=>{
        this.showInfo = false; 
         this.ivcr?.clear();
         this.info.reset();
      }
    )

  }
}


