import { Component, OnInit } from '@angular/core';
import { Stack } from 'src/app/models/stack';
import { StackService } from 'src/app/services/stack.service';

@Component({
  selector: 'app-stack-table',
  templateUrl: './stack-table.component.html',
  styleUrls: ['./stack-table.component.css']
})
export class StackTableComponent implements OnInit {
  
  stacks:Stack[] = [];
  constructor(private stackService:StackService) { }

  ngOnInit(): void {
  }

  async refreshStacks(){
    this.stacks = await this.stackService.getAllStacks();
  }
  
}
