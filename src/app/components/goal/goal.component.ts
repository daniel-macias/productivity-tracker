import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit{
  @Input() title:string = "";
  halfCredit:string = "";
  fullCredit:string = "";
  weekProgress:number[] = [0,0,0,0,0,0,0]
  
  ngOnInit(): void {

  }
}
