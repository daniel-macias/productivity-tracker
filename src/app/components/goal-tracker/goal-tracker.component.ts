import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NewGoalDialogComponent } from '../new-goal-dialog/new-goal-dialog.component';

export interface UsersData {
  title: string;
  halfCredit: string;
  fullCredit: string;
  type:string;
}

@Component({
  selector: 'app-goal-tracker',
  templateUrl: './goal-tracker.component.html',
  styleUrls: ['./goal-tracker.component.scss']
})
export class GoalTrackerComponent {
  list:any[]=[];
  title: string = "";
  halfCredit: string = "";
  fullCredit: string = "";

  addGoal(item:string)
  {
    this.list.push({id:this.list.length, name:item})
  }

  constructor(public dialog: MatDialog){}
  openDialogNewGoal()
  {
    const dialogRef = this.dialog.open(NewGoalDialogComponent,{
      width:'300px',
      data:{title:this.title,halfCredit:this.halfCredit,fullCredit:this.fullCredit,type:0}
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result.event == 'Create'){
        this.list.push({
          id:this.list.length,
          name:result.data.title,
          halfCredit:result.data.halfCredit,
          fullCredit:result.data.fullCredit})
      }
    });
  }

  editGoal(id:string, title:string, halfCredit:string, fullCredit:string)
  {

  }
  
}
