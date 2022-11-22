import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-goal-dialog',
  templateUrl: './new-goal-dialog.component.html',
  styleUrls: ['./new-goal-dialog.component.scss']
})
export class NewGoalDialogComponent {
  title:string = "";
  halfCredit:string = "";
  fullCredit:string = "";

  constructor(
    public dialogRef: MatDialogRef<NewGoalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(goalName:string, goal_half:string, goal_full:string): void {
    
    this.dialogRef.close();
  }
}
