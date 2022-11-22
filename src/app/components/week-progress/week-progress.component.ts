import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-week-progress',
  templateUrl: './week-progress.component.html',
  styleUrls: ['./week-progress.component.scss']
})
export class WeekProgressComponent implements OnInit {
  @Input() weekProgress:number[] = [0,0,0,0,0,0,0];

  changeStatus(index:number)
  {
    switch(this.weekProgress[index]) { 
      case 0: { 
         this.weekProgress[index] = 1;
         break; 
      } 
      case 1: { 
        this.weekProgress[index] = 2;
         break; 
      }
      case 2: { 
        this.weekProgress[index] = 0; 
        break; 
      } 
   } 
  }

  ngOnInit(): void
  {

  }
}
