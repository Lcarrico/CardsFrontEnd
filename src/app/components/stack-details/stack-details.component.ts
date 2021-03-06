import { Component, Input, OnInit } from '@angular/core';
import { Stack } from 'src/app/models/stack';
import { StackService } from 'src/app/services/stack/stack.service';

@Component({
  selector: 'app-stack-details',
  templateUrl: './stack-details.component.html',
  styleUrls: ['./stack-details.component.css']
})
export class StackDetailsComponent implements OnInit {

  stack:Stack = new Stack(0, "Math", "This contains basic math problems.");
  @Input() stackId: string = "0";
  
  constructor(private stackService:StackService) { }

  ngOnInit(): void {
    this.setStack();

  }

  async setStack(){
    const stackIdNum = Number(this.stackId);
    this.stack = await this.stackService.getStackById(stackIdNum);
  }

}
