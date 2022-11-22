import { Component } from '@angular/core';
import { GoalComponent } from '../goal/goal.component';

@Component({
  selector: 'app-goal-tracker',
  templateUrl: './goal-tracker.component.html',
  styleUrls: ['./goal-tracker.component.scss']
})
export class GoalTrackerComponent {
  list:any[]=[];
  addGoal(item:string)
  {
    this.list.push({id:this.list.length, name:item})
  }
}
