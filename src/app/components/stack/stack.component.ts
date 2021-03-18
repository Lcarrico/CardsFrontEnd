import { Component, OnInit } from '@angular/core';
import { Stack } from 'src/app/models/stack';
import { StackService } from 'src/app/services/stack.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {

  
  stackName:string = '';
  description:string='';

  showAllStacks:boolean = false;

  constructor(private stackService:StackService) { }

  ngOnInit(): void {
  }

  async createStack(){
    let stack:Stack = new Stack(0,this.stackName,this.description,0,[]);
    stack = await this.stackService.createStack(stack);
    // this._snackBar.open("Created a new Stack","Close",{duration:3000})
    this.showAllStacks=true;
  }


}
