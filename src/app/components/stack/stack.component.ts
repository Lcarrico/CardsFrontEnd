import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stack } from 'src/app/models/stack';
import { StackLink } from 'src/app/models/stackLink';
import { JwtService } from 'src/app/services/jwt/jwt.service';
import { StackService } from 'src/app/services/stack/stack.service';
import { StackLinkService } from 'src/app/services/stackLink/stack-link.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {

  userId:number=0;
  
  stackName:string = '';
  description:string='';

  showAllStacks:boolean = false;

  constructor(
    private stackService:StackService,
    private jwtService:JwtService,
    private stackLinkService:StackLinkService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.userId = this.jwtService.getUserId();
  }

  async createStack(){
    let stack:Stack = new Stack(0,this.stackName,this.description);
    stack = await this.stackService.createStack(stack);
    await this.stackLinkService.createStackLink(new StackLink(0,this.userId,stack.stackId,"Creator"));
    // this.deleteStack();
    this.refresh();
  }

  // async deleteStack(){
  //   await this.stackLinkService.removeStackLink(1);
  // }

  refresh(){
    window.location.reload();
  }
}
