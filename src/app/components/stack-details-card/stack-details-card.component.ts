import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Learner } from 'src/app/models/learner';
import { Stack } from 'src/app/models/stack';
import { StackLink } from 'src/app/models/stackLink';
import { JwtService } from 'src/app/services/jwt/jwt.service';
import { LearnerService } from 'src/app/services/learner/learner.service';
import { StackService } from 'src/app/services/stack/stack.service';
import { StackLinkService } from 'src/app/services/stackLink/stack-link.service';
import { ShareStackDialogComponent } from '../share-stack-dialog/share-stack-dialog.component';

@Component({
  selector: 'app-stack-details-card',
  templateUrl: './stack-details-card.component.html',
  styleUrls: ['./stack-details-card.component.css']
})
export class StackDetailsCardComponent implements OnInit {

  // stack:Stack = new Stack(0, "Math", "This contains basic math problems.");

  @Input() stackId:string = '0';

  stack:Stack = new Stack(0,"","");
  username:string = "";
  friendId:number = 0;

  constructor(
    private router:Router,
    private stackService:StackService,
    public dialog: MatDialog,
    private jwtService:JwtService,
    private stackLinkService:StackLinkService,
    private learnerService:LearnerService
    ) { }

  ngOnInit(): void {
    this.getStack();
    this.username = this.jwtService.getUsername();
  }

  async getStack(){
    this.stack = await this.stackService.getStackById(Number(this.stackId));
  }
  
  goToStudyPage(){
    this.router.navigate(['/study',this.stack.stackId])
  }

  goToStackEditPage(){
    this.router.navigate(['/stack-view-page',this.stack.stackId])
  }

  shareByFriendId(): void {
    const dialogRef = this.dialog.open(ShareStackDialogComponent, {
      width: '250px',
      data: {friendId: this.friendId}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.friendId = result;
      if(this.friendId==0){
        return;
      }else{
        this.createStackLink();
        this.friendId = 0;
      }
    });
    
  }

  async createStackLink(){
    this.learnerService.getLearnerByUsername(this.username)
    let link:StackLink = new StackLink(0,this.friendId,this.stack.stackId,"Forker")
    link = await this.stackLinkService.createStackLink(link);
    console.log(link);
  }

}
