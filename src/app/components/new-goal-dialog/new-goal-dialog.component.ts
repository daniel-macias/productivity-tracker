import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface UsersData {
  title: string;
  halfCredit: string;
  fullCredit: string;
}

@Component({
  selector: 'app-new-goal-dialog',
  templateUrl: './new-goal-dialog.component.html',
  styleUrls: ['./new-goal-dialog.component.scss']
})
export class NewGoalDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<NewGoalDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData,
  ) {}

  createGoal(){
    this.dialogRef.close({event: 'Create', data : this.data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}
