import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NewGoalDialogComponent } from '../new-goal-dialog/new-goal-dialog.component';

export interface UsersData {
  title: string;
  halfCredit: string;
  fullCredit: string;
}

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
    const dialogRef = this.dialog.open(NewGoalDialogComponent,{
      width:'300px',
      data:{title:"",halfCredit:"",fullCredit:""}
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result.event == 'Create'){
        this.list.push({
          id:this.list.length,
          name:result.data.title,
          halfCredit:result.data.halfCredit,
          fullCredit:result.data.fullCredit})
      }
    });
  }
  
}
