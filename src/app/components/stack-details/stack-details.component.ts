import { Component, OnInit } from '@angular/core';
import { Stack } from 'src/app/models/stack';

@Component({
  selector: 'app-stack-details',
  templateUrl: './stack-details.component.html',
  styleUrls: ['./stack-details.component.css']
})
export class StackDetailsComponent implements OnInit {

  stack:Stack = new Stack(0, "Math", "This contains basic math problems.");
  
  constructor() { }

  ngOnInit(): void {
  }

}
