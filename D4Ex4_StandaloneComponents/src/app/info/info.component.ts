import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoService } from '../services/info.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import { IInfo } from '../entities/info.entity';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class InfoComponent implements OnInit {

  name = "";
  info? : IInfo; 
  imgHeight = 400; 
  imgWidth = 400; 
  reset$ = new EventEmitter<boolean>();
  constructor(private infoService : InfoService, private router : Router, private cd : ChangeDetectorRef) { }

  ngOnInit(): void {

 


    // this.infoService.name.subscribe((name:string)=>{
    //   this.name = name;
    //   console.log(this.name);
    // })


    this.infoService.name.pipe(
      switchMap((name: string) => {
        this.name = name;
        return this.infoService.getInfo(this.name);
      })).subscribe(
        (data: IInfo) => {
          this.info = data;
          console.log(data);
          this.cd.markForCheck();
        }
      );
  }

  tryAgain():void{
    if(this.router.url.includes('info')){
      this.router.navigate(['home']);
    }
    else {
          this.reset$.emit(true);
    }
    
  }

}
