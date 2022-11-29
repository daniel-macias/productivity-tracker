import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { MatDialog } from '@angular/material/dialog';
import { NewGoalDialogComponent } from '../new-goal-dialog/new-goal-dialog.component';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit{
  @Input() id:string = "";
  @Input() title:string = "";
  @Input() halfCredit:string = "";
  @Input() fullCredit:string = "";
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

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public dialog: MatDialog
  ){
    this.matIconRegistry.addSvgIcon(
      "goal_full",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/goal_full.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "goal_half",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/goal_half.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "goal_empty",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/goal_empty.svg")
    );
  }

  openDialogEditGoal(id:string, title:string, halfCredit:string, fullCredit:string)
  {
    const dialogRef = this.dialog.open(NewGoalDialogComponent,{
      width:'300px',
      data:{id: id, title:title,halfCredit:halfCredit,fullCredit:fullCredit,type:1}
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
  
  ngOnInit(): void {

  }
}
