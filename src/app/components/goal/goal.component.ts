import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

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

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
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
  
  ngOnInit(): void {

  }
}
