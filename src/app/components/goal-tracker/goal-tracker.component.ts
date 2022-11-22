import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NewGoalDialogComponent } from '../new-goal-dialog/new-goal-dialog.component';

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

  constructor(public dialog: MatDialog){}
  openDialogNewGoal()
  {
    this.dialog.open(NewGoalDialogComponent,{
      width:'300px',
      data:'right click'
    })
  }
  
}
