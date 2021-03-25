import { Component, OnInit } from '@angular/core';
import { Stack } from 'src/app/models/stack';

@Component({
  selector: 'app-stack-details-card',
  templateUrl: './stack-details-card.component.html',
  styleUrls: ['./stack-details-card.component.css']
})
export class StackDetailsCardComponent implements OnInit {

  stack:Stack = new Stack(0, "Math", "This contains basic math problems.");

  constructor() { }

  ngOnInit(): void {
  }

}
